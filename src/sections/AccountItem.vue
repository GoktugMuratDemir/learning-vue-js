<template>
  <div class="account__item">
    <div class="account__item__present">
      <img
        class="account__item__present-logo"
        :src="'/src/assets/img/logos/logo_' + account.img + '.png'"
        alt=""
      />

      <div class="account__item__present-desc">
        <p class="text -xl -bold">{{ account.title }}</p>
        <p class="text -md -medium -dark-200">{{ account.site }}</p>
      </div>
    </div>

    <p class="text -md -medium">{{ account.count }} accounts</p>

    <CustomDropdown :id="account.id" />

    <!-- <Popover /> -->

    <!-- <Dropdown /> -->
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";
import Popover from "../components/Popover.vue";
import CustomDropdown from "../components/CustomDropdown.vue";

export default {
  name: "AccountItem",
  components: {
    Dropdown,
    Popover,
    CustomDropdown,
  },
  props: {
    account: {
      type: Object,
      required: true,
    },
  },
};
</script>
