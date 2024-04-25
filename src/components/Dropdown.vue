<template>
  <div class="dropdown">
    <button class="dropdown__button">Dropdown</button>
    <div class="dropdown__content">
      <a href="#" v-for="(item, index) in dropdownItems" :key="index">{{
        item
      }}</a>
    </div>
  </div>
</template>

<script>
export default {
  name: "Dropdown",

  computed: {
    dropdownItems() {
      return ["Item 1", "Item 2", "Item 3"];
    },
  },
};
</script>

<style lang="scss" scoped>
.dropdown {
  display: inline-block;
  position: relative;

  &__button {
    background-color: #4caf50;
    border: none;
    color: white;
    cursor: pointer;
    font-size: 16px;
    padding: 12px;

    &:hover,
    &:focus {
      background-color: #3e8e41;
    }
  }

  &__content {
    position: absolute;
    top: 36px;
    right: 0;
    background-color: #f9f9f9;
    box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
    display: none;
    min-width: 160px;
    
    z-index: 1;

    a {
      color: black;
      display: block;
      padding: 12px 16px;
      text-decoration: none;

      &:hover {
        background-color: #f1f1f1;
      }
    }
  }

  &:hover {
    .dropdown__content {
      display: block;
    }
  }
}
</style>
