<template>
    <div class="dropdown">
        <input type="checkbox" name="toggle" :id="`checkbox-${id}`" />

        <label :for="`checkbox-${id}`">
            <img class="img -sm" src="@/assets/img/icons/ic_threeDot.svg" alt="" />
        </label>
        <div class="dropdown__content">İçerik</div>
    </div>
</template>

<script>
export default {
    name: "CustomDropdown",
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
};
</script>

<style lang="scss" scoped>
.dropdown {
    $parent : &;
    position: relative;

    &:has(input[name="toggle"]:checked) {
        #{$parent}__content {
            display: block;
        }
    }

    input[name="toggle"] {
        display: none;
    }

    &__content {
        display: none;
        position: absolute;
        top: 36px;
        right: 0;
        background-color: #f9f9f9;
        box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
        min-width: 160px;
        z-index: 1;
    }
}
</style>
