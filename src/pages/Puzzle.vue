<template>
  <div class="puzzle">
    <div>
      <button
        class="btn -contained -caribbeanGreen -lg"
        @click="gameInit"
        v-if="!gameStarted"
      >
        Start The Game
      </button>
    </div>
    <CustomModal v-if="modalType === 'alert'" @close="closeModal">
      <h1>modal</h1>
    </CustomModal>
    <h1 class="text -xxl -semibold">{{ counterText }}</h1>
    <div class="text -lg" v-if="gameStarted">Score: {{ score }}</div>
    <div class="puzzle__board" v-if="gameStarted">
      <div
        v-for="(card, index) in shuffledCards"
        :key="index"
        class="puzzle__card"
        :class="{
          '-selected': card.selected,
          '-matched': card.matched,
          '-error': card.error,
        }"
        @click="revealCard(card)"
      >
        <p v-if="showTime || card.selected || card.matched">{{ card.value }}</p>
      </div>
    </div>
    <div>
      <button
        class="btn -contained -cinnabar -md"
        v-if="gameStarted"
        @click="failGame('fail')"
      >
        Reset Game
      </button>
    </div>


  </div>
</template>

<script lang="ts">
import { ref, computed, Ref, defineComponent } from "vue";
import CustomModal from "@/components/modals/CustomModal.vue";

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

export default defineComponent({
  components: {
    CustomModal,
  },
  setup() {
    const modalType = ref("");
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

    const openModal = (type: string) => {
      modalType.value = type;
    };

    const closeModal = () => {
      modalType.value = "";
    };

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
      setTimeout(() => {
        if (countdownTimes.value === 2) {
          counterText.value = `The Game Will Start: ${remainingTime.value}`;
        } else {
          showTime.value = false;
          counterText.value = `The Time Left: ${remainingTime.value}`;
        }
        remainingTime.value--;
        if (remainingTime.value >= 0) {
          setTimeout(startCountDown, delay.value);
        } else {
          countdownTimes.value--;
          if (countdownTimes.value > 0) {
            if (counterText.value.endsWith("0")) {
              remainingTime.value = 60;
              setTimeout(startCountDown, delay.value);
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
      resetGame();
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
        resetGame();
      }
    };

    const resetGame = () => {
      window.location.reload();
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
      modalType,
      openModal,
      closeModal,
    };
  },
});
</script>
