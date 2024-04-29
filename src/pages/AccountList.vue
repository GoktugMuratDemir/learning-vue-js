<template>
  <div class="account">
    <div class="account__wrapper">
      <header class="account__header">
        <div class="account__search">
          <img class="account__search-icon img -icon" src="@/assets/img/icons/ic_search.svg" alt="" />
          <input class="account__search-input" type="text" placeholder="Search" v-model="searchTerm" />
        </div>

        <div class="account__actions">
          <div>
            <img @click="showModalNotification = true" class="img -sm" src="@/assets/img/icons/ic_notification.svg"
              alt="" />
            <CustomModal v-if="showModalNotification" @close="closeModal">
              <h1>IMG</h1>
            </CustomModal>
          </div>

          <img class="img -md" src="@/assets/img/icons/ic_temp_avatar.svg" alt="" />
        </div>
      </header>
      <div class="account__add">
        <p class="text -xxl -bold -center">Accounts</p>

        <div>
          <button class="btn -contained -cornflowerBlue" @click="showModalAdd = true">
            Add Account
          </button>
          <CustomModal v-if="showModalAdd" @close="closeModal">
            <h1>Modal Content</h1>
            <p>This is some modal content.</p>
          </CustomModal>
        </div>
      </div>
      <section class="account__list">
        <AccountItem :account="account" v-for="account in filteredAccounts" :key="account.id"
          :deleteAccount="deleteAccount" />
        <h1 v-if="filteredAccounts.length">{{ searchTerm }}</h1>
        <div v-else>Data not found</div>
      </section>
    </div>
    
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import AccountItem from "@/sections/AccountItem.vue";
import CustomModal from "@/components/modals/CustomModal.vue";

interface Account {
  id: number;
  title: string;
  site: string;
  count: number;
  img: string;
}

export default defineComponent({
  components: {
    AccountItem,
    CustomModal,
  },
  setup() {
    const searchTerm = ref("");
    const modalName = ref("");
    const showModalNotification = ref(false);
    const showModalAdd = ref(false);
    const accounts = ref < Account[] > ([
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
    ]);

    const closeModal = () => {
      showModalNotification.value = false;
      showModalAdd.value = false;
    };

    const openModal = (modalProps: string) => {
      modalName.value = modalProps;
      showModalNotification.value = true;
      showModalAdd.value = true;
    };

    const deleteAccount = (accountId: number) => {
      accounts.value = accounts.value.filter(
        (account) => account.id !== accountId
      );
    };

    const addAccount = (newAccount: Account) => {
      accounts.value.push(newAccount);
    };

    const updateAccount = (updatedAccount: Account) => {
      const index = accounts.value.findIndex(
        (account) => account.id === updatedAccount.id
      );
      if (index !== -1) {
        accounts.value[index] = updatedAccount;
      }
    };

    const filteredAccounts = computed(() => {
      return accounts.value.filter((account) => {
        return account.title
          .toLowerCase()
          .includes(searchTerm.value.toLowerCase());
      });
    });

    return {
      searchTerm,
      showModalNotification,
      showModalAdd,
      accounts,
      closeModal,
      deleteAccount,
      addAccount,
      updateAccount,
      filteredAccounts,
    };
  },
});
</script>
