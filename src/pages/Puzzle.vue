<template>
  <div class="game">
    <button class="startButton" @click="gameInit" v-if="!gameStarted">Start The Game</button>
    <h1 class="counter">{{ counterText }}</h1>
    <div v-if="gameStarted">Score: {{ score }}</div>
    <div class="game-board" v-if="gameStarted">
      <div
        v-for="(card, index) in shuffledCards"
        :key="index"
        class="card"
        :class="{
          selected: card.selected,
          matched: card.matched,
          error: card.error,
        }"
        @click="revealCard(card)"
      >
        <p v-if="showTime || card.selected || card.matched">{{ card.value }}</p>
      </div>
    </div>
    <button class="quitButton" v-if="gameStarted" @click="failGame('fail')">
      Reset Game
    </button>
  </div>
</template>

<script lang="ts">
import { ref, computed, Ref } from "vue";

interface Card {
  value: string;
  selected: boolean;
  matched: boolean;
  error: boolean;
}

interface ScorePoint {
  success: number;
  fail: number;
}

interface SelectionUpdate {
  matched?: boolean;
  selected?: boolean;
  error?: boolean;
}

export default {
  setup() {
    const cards: Ref<Card[]> = ref(
      [
        "A",
        "A",
        "B",
        "B",
        "C",
        "C",
        "D",
        "D",
        "E",
        "E",
        "F",
        "F",
        "G",
        "G",
        "H",
        "H",
      ].map((value) => ({
        value,
        selected: false,
        matched: false,
        error: false,
      }))
    );

    const score: Ref<number> = ref(0);
    const countdownTimes: Ref<number> = ref(2);
    const gameStarted: Ref<boolean> = ref(false);
    const showTime: Ref<boolean> = ref(false);
    const counterText: Ref<string> = ref("");
    const remainingTime: Ref<number> = ref(5);
    const scorePoint: Ref<ScorePoint> = ref({
      success: 10,
      fail: -5,
    });

    const currentSelection: Ref<Card[]> = ref([]);
    const delay: Ref<number> = ref(1000);

    const shuffledCards = computed(() => {
      let counter = cards.value.length;
      let array = [...cards.value];
      while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    });

    const updateScore = (amount: number) => {
      score.value += amount;
    };

    const startCountDown = () => {
      showTime.value = true;
      let countdown = setTimeout(() => {
        if (countdownTimes.value === 2) {
          counterText.value = `The Game Will Start: ${remainingTime.value}`;
        } else {
          showTime.value = false;
          counterText.value = `The Time Left: ${remainingTime.value}`;
        }
        remainingTime.value--;
        if (remainingTime.value >= 0) {
          countdown = setTimeout(startCountDown, delay.value);
        } else {
          countdownTimes.value--;
          if (countdownTimes.value > 0) {
            if (counterText.value.endsWith("0")) {
              remainingTime.value = 60;
              countdown = setTimeout(startCountDown, delay.value);
            } else {
              counterText.value = "";
            }
          } else {
            failGame("timeout");
          }
        }
      }, 0);
    };

    const gameInit = () => {
      gameStarted.value = true;
      startCountDown();
      cards.value = shuffledCards.value;
    };

    const revealCard = (card: Card) => {
      if (showTime.value || card.selected || currentSelection.value.length >= 2)
        return;
      card.selected = true;
      currentSelection.value.push(card);
      if (currentSelection.value.length === 2) {
        currentSelection.value[0].value === currentSelection.value[1].value
          ? success()
          : fail();
      }
    };

    const failGame = (status: string) => {
      if (status === "fail") {
        alert("You have failed the game!");
      }
      if (status === "timeout") {
        alert("You have failed the game because of the timeout!");
      }
      location.reload();
    };

    const updateCurrentSelection = ({
      matched = false,
      selected = false,
      error = false,
    }: SelectionUpdate) => {
      currentSelection.value.forEach((item) => {
        item.matched = matched;
        item.selected = selected;
        item.error = error;
      });
    };

    const resetCurrentSelection = () => {
      currentSelection.value = [];
    };

    const success = () => {
      updateCurrentSelection({ matched: true, selected: false });
      resetCurrentSelection();
      updateScore(scorePoint.value.success);
      successGame();
    };

    const fail = () => {
      setTimeout(() => {
        updateCurrentSelection({ selected: false, error: true });
        setTimeout(() => {
          updateCurrentSelection({ error: false });
          resetCurrentSelection();
        }, delay.value);
      }, delay.value);
      updateScore(scorePoint.value.fail);
    };

    const successGame = () => {
      if (cards.value.every((card) => card.matched)) {
        alert(
          `Congratulations! You have won the game!, Your score is: ${score.value} points `
        );
        location.reload();
      }
    };

    return {
      cards,
      score,
      countdownTimes,
      gameStarted,
      showTime,
      counterText,
      remainingTime,
      scorePoint,
      currentSelection,
      delay,
      shuffledCards,
      updateScore,
      startCountDown,
      gameInit,
      revealCard,
      failGame,
      updateCurrentSelection,
      resetCurrentSelection,
      success,
      fail,
      successGame,
    };
  },
};
</script>

<style scoped>
.game {
  margin: 0;
  padding: 0;
  width: 100%;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background-color: #f8f9fa;
}
/**
 * Styles for the game board.
 */
.game-board {
  display: grid;
  gap: 10px;
  grid-template-columns: repeat(4, 1fr);
}

/**
 * Styles for the game cards.
 */
.card {
  width: 100px;
  height: 100px;
  padding: 8px;
  border-radius: 24px;
  background-color: #ccc;
  display: inline-block;
  margin: 10px;
  text-align: center;
  vertical-align: top;
  line-height: 100px;
  font-size: 2em;
  cursor: pointer;
  animation: colorChange 5s forwards, fadeIn 1s ease-in-out;
}

/**
 * Animation keyframes for changing card color.
 */
@keyframes colorChange {
  0% {
    color: black;
  }
  50% {
    color: black;
  }
  100% {
    color: transparent;
  }
}

/**
 * Animation keyframes for fading in the card.
 */
@keyframes fadeIn {
  0% {
    opacity: 0;
  }
  100% {
    opacity: 1;
  }
}

/**
 * Styles for matched cards.
 */
.matched {
  background-color: #398439;
  color: black !important;
}

/**
 * Styles for error state.
 */
.error {
  background-color: #d9534f;
}

/**
 * Styles for selected cards.
 */
.selected {
  background-color: #f0ad4e;
  color: black !important;
}

/**
 * Styles for the counter element.
 */
.counter {
  font-size: 2em;
  margin: 10px;
}

/**
 * Styles for the quit button.
 */
.quitButton {
  background-color: #f44336;
  border: none;
  color: white;
  padding: 8px 16px;
  text-align: center;
  text-decoration: none;
  /* display: none; */
  font-size: 16px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  border-radius: 12px;
  cursor: pointer;
  margin-top: 12px;
}

/**
 * Styles for the start button.
 */
.startButton {
  background-color: #4caf50; /* Green */
  border: none;
  color: white;
  padding: 15px 32px;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  font-size: 32px;
  margin: 4px 2px;
  cursor: pointer;
  transition-duration: 0.4s;
  border-radius: 12px;
}

/**
 * Styles for the start button on hover.
 */
.startButton:hover {
  background-color: #45a049;
}

/**
 * Styles for the score board.
 */
.score-board {
  display: none;
  justify-content: space-between;
  width: 75%;
  padding: 10px;
  background-color: #f8f9fa;
  border-bottom: 1px solid #ccc;
}
</style>
