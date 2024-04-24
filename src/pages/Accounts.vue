<template>
  <div class="account">
    <div class="account__wrapper">
      <header class="account__header">
        <div class="account__header__search">
          <img class="account__header__search-icon img -icon" src="@/assets/img/icons/ic_search.svg" alt="" />
          <input class="account__header__search-input" type="text" placeholder="Search" />
        </div>

        <div class="account__header__info">
          <div class="account__header__info__notification">
            <img class="img -sm" src="@/assets/img/icons/ic_notification.svg" alt="" />
            <div class="account__header__info__notification-badge"></div>
          </div>

          <img class="img -md" src="@/assets/img/icons/ic_temp_avatar.svg" alt="" />
        </div>
      </header>
      <p class="text -xxl -bold -center">Accounts</p>
      <div class="account__list">
        <div class="account__list__item" v-for="(account, index) in accounts" :key="index">
          <div class="account__list__item__info">
            <img class="account__list__item__info-logo" :src="'/src/assets/img/logos/logo_' + account.img + '.png'" alt="" />

            <div class="account__list__item__info-desc">
              <p class="text -xl -bold">{{ account.title }}</p>
              <p class="text -md -medium -dark-200">{{ account.site }}</p>
            </div>
          </div>

          <p class="text -md -medium">{{ account.count }} accounts</p>

          <Dropdown />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";

export default {
  components: {
    Dropdown
  },
  data() {
    return {
      accounts: [
        {
          id: 1,
          title: "Dropbox",
          site: "dropbox.com",
          count: 24,
          img: "dropbox",
        },

        {
          id: 2,
          title: "Pinterest",
          site: "pinterest.com",
          count: 12,
          img: "pinterest",
        },

        {
          id: 3,
          title: "Microsoft",
          site: "microsft.com",
          count: 3,
          img: "microsoft",
        },

      ],
    };
  },
};
</script>
