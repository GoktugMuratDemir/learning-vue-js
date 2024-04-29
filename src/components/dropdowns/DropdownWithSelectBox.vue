<template>
    <div class="dropdown">
        <input type="checkbox" name="toggle" :id="`checkbox-${id}`" />

        <label class="dropdown-label" :for="`checkbox-${id}`">
            <img class="img -sm" :src="`/img/icons/${icon}.svg`" alt="" />
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
        icon: {
            type: String,
            required: true,
        },
    },
};
</script>
