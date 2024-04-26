<template>
    <div class="dropdown">
        <input type="checkbox" name="toggle" :id="`checkbox-${id}`" />

        <label :for="`checkbox-${id}`">
            <img class="img -sm" src="@/assets/img/icons/ic_threeDot.svg" alt="" />
        </label>
        <div class="dropdown__content">
            <slot></slot>
        </div>
    </div>
</template>

<script>
export default {
    name: "DropdownWithSelectBox",
    props: {
        id: {
            type: Number,
            required: true,
        },
    },
};
</script>
