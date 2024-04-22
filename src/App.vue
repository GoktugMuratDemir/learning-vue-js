<script setup lang="ts">
import Header from './layouts/Header.vue'
</script>

<template>
  <div>
    <Header />
    <router-view></router-view>
  </div>
</template>

<style lang="scss">
@import './assets/scss/main.scss';
</style>
