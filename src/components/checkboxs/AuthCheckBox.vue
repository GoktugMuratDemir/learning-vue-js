<template>
  <div class="checkbox">
    <label class="checkbox__label">
      <input class="checkbox__input" type="checkbox" name="" id="" />{{ label }}
    </label>
    <router-link :to="linkHref" class="text -link">{{ linkText }}</router-link>
  </div>
</template>

<script>
export default {
  name: "AuthCheckBox",
  props: {
    label: {
      type: String,
    },
    linkText: {
      type: String,
    },
    linkHref: {
      type: String,
      default: "/",
    },
  },
};
</script>
