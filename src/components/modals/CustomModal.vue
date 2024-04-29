<template>
  <div class="modal" @click="closeModal">
    <div class="modal__content" @click.stop>
      <slot></slot>
      <button class="modal__content-btn" @click="closeModal">X</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomModal",
  methods: {
    closeModal() {
      this.$emit("close");
    },
    props: {
        modalName: {
            type: String,
            required: true
        }
    }
  },
};
</script>
