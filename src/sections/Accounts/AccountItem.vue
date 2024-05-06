<template>
  <div class="account__item">
    <div class="account__item__present">
      <img
        class="account__item__present-logo"
        :src="getImgPath(account.logo)"
        alt=""
      />

      <div class="account__item__present-desc">
        <p class="text -xl -bold">{{ account.title }}</p>
        <p class="text -md -medium -dark-200">{{ account.site }}</p>
      </div>
    </div>

    <p class="text -md -medium">{{ account.count }} accounts</p>

    <DropdownWithSelectBox :id="account.id" icon="ic_threeDot">
      <div class="account__options">
        <div class="account__options__item">
          <p class="text -sm -semibold">Edit</p>
          <img class="img -xs" src="/img/icons/ic_edit.svg" alt="" />
        </div>
        <div class="account__options__item" @click="deleteAccount(account.id)">
          <p class="text -sm -semibold">Delete</p>
          <img class="img -xs" src="/img/icons/ic_delete.svg" alt="" />
        </div>
      </div>
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
    deleteAccount: {
      type: Function,
      required: true,
    },
  },
  computed: {
    getImgPath() {
      // return (img) => require(`/img/logos/${img}`);
      return (img) => `/img/logos/${img}`;
    },
  },
};
</script>
