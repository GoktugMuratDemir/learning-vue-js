<template>
    <div class="auth__form-group">
      <img
        class="auth__form-group__icon img -icon"
        :src="'/src/assets/img/icons/' + icon + '.svg'"
        alt=""
      />
      <input class="auth__form-group__input" :type="type" required />
      <label class="auth__form-group__label">{{ label }}</label>
    </div>
  </template>
  
  <script>
  export default {
    name: 'AuthTextField',
    props: {
      icon: {
        type: String,
        required: true
      },
      type: {
        type: String,
        required: true
      },
      label: {
        type: String,
        required: true
      }
    }
  }
  </script>

<!-- :src="'/assets/img/icons/' + icon + '.svg'" -->