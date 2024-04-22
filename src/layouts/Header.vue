<template>
    <header>
        <router-link to="/">One</router-link>
        <router-link to="/two">Two</router-link>

    </header>
</template>

<script>
export default {
    name: 'Header'
}
</script>

<style scoped>
header {
    background-color: #f8f9fa;
    padding: 20px;
}

nav ul {
    list-style-type: none;
    padding: 0;
}

nav ul li {
    display: inline;
    margin-right: 10px;
}
</style>