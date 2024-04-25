<template>
    <div class="popover">
        <button @click="show = !show">Toggle Popover</button>
        <div v-if="show" class="popover__content">
            This is a popover content.
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            show: false
        }
    }
}
</script>

<style lang="scss" scoped>
.popover {

    position: relative;

    &__content {
        top: 32px;
        right: 0;
        position: absolute;
        cursor: pointer;
        background-color: #f9f9f9;
        border: 1px solid #ccc;
        padding: 10px;
        width: 200px;
        z-index: 1;
    }
}
</style>