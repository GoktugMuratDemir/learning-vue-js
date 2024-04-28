<template>
  <div class="account">
    <div class="account__wrapper">
      <header class="account__header">
        <div class="account__search">
          <img class="account__search-icon img -icon" src="@/assets/img/icons/ic_search.svg" alt="" />
          <input class="account__search-input" type="text" placeholder="Search" v-model="searchTerm" />
        </div>

        <div class="account__actions">
          <img class="img -sm" src="@/assets/img/icons/ic_notification.svg" alt="" />

          <img class="img -md" src="@/assets/img/icons/ic_temp_avatar.svg" alt="" />
        </div>
      </header>
      <p class="text -xxl -bold -center">Accounts</p>
      <section class="account__list">
        <AccountItem :account="account" v-for="account in filteredAccounts" :key="account.id"
          :deleteAccount="deleteAccount" />
        <h1 v-if="filteredAccounts.length">{{ searchTerm }}</h1>
        <div v-else>Data not found</div>
      </section>
    </div>
  </div>
</template>

<script>
import AccountItem from "@/sections/AccountItem.vue";
import { computed } from "vue";

export default {
  components: {
    AccountItem,
  },
  data() {
    return {
      searchTerm: "",
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

  methods: {
    deleteAccount(accountId) {
      this.accounts = this.accounts.filter(
        (account) => account.id !== accountId
      );
    },
    updateAccount(newAccount) {
      const index = this.accounts.findIndex(account => account.id === newAccount.id);
      if (index !== -1) {
        this.$set(this.accounts, index, newAccount);
      }
    }
  },

  computed: {
    filteredAccounts() {
      return this.accounts.filter((account) => {
        return account.title
          .toLowerCase()
          .includes(this.searchTerm.toLowerCase());
      });
    },
  },
};
</script>
