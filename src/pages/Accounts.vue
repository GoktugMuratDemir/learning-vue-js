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
                        <img class="img -icon" src="@/assets/img/icons/ic_notification.svg" alt="" />
                        <div class="account__header__info__notification-badge"></div>
                    </div>

                    <img class="img -icon" src="@/assets/img/icons/ic_temp_avatar.svg" alt="" />
                </div>
            </header>
            <p class="text -xxl -bold ">Accounts</p>
            <div class="account__list">
                <div class="account__list__item">
                    <img class="img -icon" src="@/assets/img/icons/ic_temp_avatar.svg" alt="" />

                    <div class="account__list__item__info">
                        <p class="text -md">John Doe</p>
                        <p class="text -xs">John Doe</p>
                    </div>

                    <p class="text -sm">John Doe</p>

                    <p class="text -md">.....</p>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    components: {},
};
</script>
