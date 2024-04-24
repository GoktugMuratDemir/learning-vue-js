<template>
    <div class="textfield">
        <img class="textfield__icon img -icon" :src="'/src/assets/img/icons/' + icon + '.svg'" alt="" />
        <input class="textfield__input" :type="type" required />
        <label class="textfield__label">{{ label }}</label>
    </div>
</template>

<script>
export default {
    name: 'AuthTextField',
    props: {
        icon: {
            type: String,
            required: true
        },
        type: {
            type: String,
            required: true
        },
        label: {
            type: String,
            required: true
        }
    }
}
</script>