<template>
  <div class="account">
    <div class="account__wrapper">
      <header class="account__header">
        <div class="account__search">
          <img
            class="account__search-icon img -icon"
            src="@/assets/img/icons/ic_search.svg"
            alt=""
          />
          <input
            class="account__search-input"
            type="text"
            placeholder="Search"
          />
        </div>

        <div class="account__actions">
          <img
            class="img -sm"
            src="@/assets/img/icons/ic_notification.svg"
            alt=""
          />

          <img
            class="img -md"
            src="@/assets/img/icons/ic_temp_avatar.svg"
            alt=""
          />
        </div>
      </header>
      <p class="text -xxl -bold -center">Accounts</p>
      <section class="account__list">
        <div
          class="account__item"
          v-for="(account, index) in accounts"
          :key="index"
        >
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

          <Popover />

          <Dropdown />
        </div>
      </section>
    </div>
  </div>
</template>

<script>
import Dropdown from "../components/Dropdown.vue";
import Popover from "../components/Popover.vue";

export default {
  components: {
    Dropdown,
    Popover,
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
