<template>
  <div class="game">
    <button class="startButton" @click="gameInit">Start The Game</button>
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

<script>
export default {
  data() {
    return {
      cards: ["A", "A", "B", "B"].map((value) => ({
        value,
        selected: false,
        matched: false,
        error: false,
      })),
      score: 0,
      countdownTimes: 2,
      gameStarted: false,
      showTime: false,
      counterText: "",
      remainingTime: 5,
      scorePoint: {
        success: 10,
        fail: -5,
      },
      currentSelection: [],
      delay: 1000,
    };
  },
  computed: {
    shuffledCards() {
      let counter = this.cards.length;
      let array = [...this.cards];
      while (counter > 0) {
        let index = Math.floor(Math.random() * counter);
        counter--;
        let temp = array[counter];
        array[counter] = array[index];
        array[index] = temp;
      }
      return array;
    },
  },
  methods: {
    updateScore(amount) {
      this.score += amount;
    },
    startCountDown() {
      this.showTime = true;
      let countdown = setTimeout(() => {
        if (this.countdownTimes === 2) {
          this.counterText = `The Game Will Start: ${this.remainingTime}`;
        } else {
          this.showTime = false;
          this.counterText = `The Time Left: ${this.remainingTime}`;
        }
        this.remainingTime--;
        if (this.remainingTime >= 0) {
          countdown = setTimeout(this.startCountDown, this.delay);
        } else {
          this.countdownTimes--;
          if (this.countdownTimes > 0) {
            if (this.counterText.endsWith("0")) {
              this.remainingTime = 60;
              countdown = setTimeout(this.startCountDown, this.delay);
            } else {
              this.counterText = "";
            }
          } else {
            this.failGame("timeout");
          }
        }
      }, 0);
    },
    gameInit() {
      this.gameStarted = true;
      this.startCountDown();
      this.cards = this.shuffledCards;
    },
    revealCard(card) {
      if (card.selected || this.currentSelection.length >= 2) return;
      card.selected = true;
      this.currentSelection.push(card);
      if (this.currentSelection.length === 2) {
        this.currentSelection[0].value === this.currentSelection[1].value
          ? this.success()
          : this.fail();
      }
    },
    failGame(status) {
      if (status === "fail") {
        alert("You have failed the game!");
      }
      if (status === "timeout") {
        alert("You have failed the game because of the timeout!");
      }
      location.reload();
    },
    updateCurrentSelection({
      matched = false,
      selected = false,
      error = false,
    }) {
      this.currentSelection.forEach((item) => {
        item.matched = matched;
        item.selected = selected;
        item.error = error;
      });
    },
    resetCurrentSelection() {
      this.currentSelection = [];
    },
    success() {
      this.updateCurrentSelection({ matched: true, selected: false });
      this.resetCurrentSelection();
      this.updateScore(this.scorePoint.success);
      this.successGame();
    },
    fail() {
      setTimeout(() => {
        this.updateCurrentSelection({ selected: false, error: true });
        setTimeout(() => {
          this.updateCurrentSelection({ error: false });
          this.resetCurrentSelection();
        }, this.delay);
      }, this.delay);
      this.updateScore(this.scorePoint.fail);
    },
    successGame() {
      if (this.cards.every((card) => card.matched)) {
        alert(
          `Congratulations! You have won the game!, Your score is: ${this.score} points `
        );
        location.reload();
      }
    },
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
