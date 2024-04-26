<template>
  <div class="account__item">
    <div class="account__item__present">
      <img class="account__item__present-logo" :src="'/src/assets/img/logos/logo_' + account.img + '.png'" alt="" />

      <div class="account__item__present-desc">
        <p class="text -xl -bold">{{ account.title }}</p>
        <p class="text -md -medium -dark-200">{{ account.site }}</p>
      </div>
    </div>

    <p class="text -md -medium">{{ account.count }} accounts</p>

    <DropdownWithSelectBox :id="account.id">
      Content
    </DropdownWithSelectBox>

    <!-- <Popover /> -->

    <!-- <Dropdown /> -->
  </div>
</template>

<script>
import DropdownWithSelectBox from "@/components/dropdowns/DropdownWithSelectBox.vue";

export default {
  name: "AccountItem",
  components: {
    DropdownWithSelectBox,
  },
  props: {
    account: {
      type: Object,
      required: true,
    },
  },
};
</script>
