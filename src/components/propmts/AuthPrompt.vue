<template>
    <div>
        <p class="text -xs -medium -dark-400">
            {{ promptText }}<router-link :to="linkHref" class="text -link">{{ linkText }}</router-link>
        </p>
    </div>
</template>

<script>
export default {
    name: 'AuthPrompt',
    props: {
        promptText: {
            type: String,
            required: true
        },
        linkText: {
            type: String,
            required: true
        },
        linkHref: {
            type: String,
            default: '/'
        }
    }
}
</script>