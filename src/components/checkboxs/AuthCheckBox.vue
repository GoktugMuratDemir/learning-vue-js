<template>
    <div class="checkbox">
        <label class="checkbox__label">
            <input class="checkbox__input" type="checkbox" name="" id="" />{{ label }}
        </label>
        <a v-if="linkText" class="text -link" href="#">{{ linkText }}</a>
    </div>
</template>

<script>
export default {
    name: 'AuthCheckBox',
    props: {
        label: {
            type: String,

        },
        linkText: {
            type: String,

        }
    }
}
</script>