<template>
  <div class="popover">
    <div class="popover__content">
      <slot></slot>
      <button @click="closePopover">Close</button>
    </div>
  </div>
</template>

<script>
export default {
  name: "CustomPopover",
  data() {
    return {
      show: false,
    };
  },
  methods: {
    closeModal() {
      this.$emit("close");
    },
  },
};
</script>

<style lang="scss" scoped>
.popover {
  position: relative;

  &__content {
    top: 32px;
    right: 0;
    position: absolute;
    cursor: pointer;
    background-color: #f9f9f9;
    border: 1px solid #ccc;
    padding: 10px;
    width: 200px;
    z-index: 1;
  }
}
</style>
