<template>
  <div class="account">
    <div class="account__wrapper">
      <header class="account__header">
        <div class="account__search">
          <img
            class="account__search-icon img -icon"
            src="/img/icons/ic_search.svg"
            alt=""
          />
          <input
            class="account__search-input"
            type="text"
            placeholder="Search"
            v-model="searchTerm"
          />
        </div>

        <div class="account__actions">
          <div>
            <img
              @click="openModal('notification')"
              class="img -sm"
              src="/img/icons/ic_notification.svg"
              alt=""
            />
            <CustomModal
              v-if="modalType === 'notification'"
              @close="closeModal"
            >
              <h1>IMG</h1>
            </CustomModal>
          </div>

          <img
            class="img -md"
            src="/img/icons/ic_temp_avatar.svg"
            alt=""
          />
        </div>
      </header>
      <div class="account__add">
        <p class="text -xxl -bold -center">Accounts</p>

        <div>
          <button
            @click="openModal('add')"
            class="btn -contained -cornflowerBlue"
          >
            Add Account
          </button>
          <CustomModal v-if="modalType === 'add'" @close="closeModal">
            <AccountAddEditForm />
          </CustomModal>
        </div>
      </div>
      <section class="account__list">
        <AccountItem
          :account="account"
          v-for="account in filteredAccounts"
          :key="account.id"
          :deleteAccount="deleteAccount"
        />
        <h1 v-if="filteredAccounts.length">{{ searchTerm }}</h1>
        <div v-else>Data not found</div>
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed } from "vue";
import AccountItem from "@/sections/Accounts/AccountItem.vue";
import CustomModal from "@/components/modals/CustomModal.vue";
import AccountAddEditForm from "@/sections/Accounts/AccountAddEditForm.vue";

interface Account {
  id: number;
  title: string;
  site: string;
  count: number;
  logo: string;
}

export default defineComponent({
  components: {
    AccountItem,
    CustomModal,
    AccountAddEditForm
  },
  setup() {
    const searchTerm = ref("");
    const modalType = ref("");
    const accounts = ref<Account[]>([
      {
        id: 1,
        title: "Dropbox",
        site: "dropbox.com",
        count: 24,
        logo: "logo_dropbox.png",
      },
      {
        id: 2,
        title: "Pinterest",
        site: "pinterest.com",
        count: 12,
        logo: "logo_pinterest.png",
      },
      {
        id: 3,
        title: "Microsoft",
        site: "microsft.com",
        count: 3,
        logo: "logo_microsoft.png",
      },
    ]);

    const openModal = (type: string) => {
      modalType.value = type;
    };

    const closeModal = () => {
      modalType.value = "";
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
      modalType,
      accounts,
      openModal,
      closeModal,
      deleteAccount,
      addAccount,
      updateAccount,
      filteredAccounts,
    };
  },
});
</script>
