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
                        <img class="img -lg" :src="'/src/assets/img/icons/' + account.img + '.svg'" alt="" />

                        <div class="account__list__item__info-extra">
                            <p class="text -xl -bold">{{ account.title }}</p>
                            <p class="text -md -medium">{{ account.site }}</p>
                        </div>
                    </div>

                    <p class="text -md -medium">{{ account.count }} Accounts</p>

                    <p class="text -xxs">.....</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
    data() {
        return {
            accounts: [
                {
                    id: 1,
                    title: "Dropbox",
                    site: "dropbox.com",
                    count: 24,
                    img: "ic_temp_avatar",
                },
                {
                    id: 2,
                    title: "Google",
                    site: "google.com",
                    count: 24,
                    img: "ic_temp_avatar",
                },
                {
                    id: 3,
                    title: "Facebook",
                    site: "facebook.com",
                    count: 24,
                    img: "ic_temp_avatar",
                },
            ],
        };
    },
};
</script>
