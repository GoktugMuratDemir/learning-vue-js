<template>
    <div>
        <form @submit.prevent="submitForm">
            <label for="id">ID:</label>
            <input type="number" id="id" v-model="account.id">

            <label for="title">Title:</label>
            <input type="text" id="title" v-model="account.title">

            <label for="site">Site:</label>
            <input type="text" id="site" v-model="account.site">

            <label for="count">Count:</label>
            <input type="number" id="count" v-model="account.count">

            <label for="logo">Logo:</label>
            <input type="text" id="logo" v-model="account.logo">

            <button type="submit">Submit</button>
        </form>
    </div>
</template>

<script>
export default {
    name: "AccountAddEditForm",
    data() {
        return {
            account: {
                id: 1,
                title: "Dropbox",
                site: "dropbox.com",
                count: 24,
                logo: "logo_dropbox.png",
            }
        };
    },
    methods: {
        submitForm() {
            // Handle form submission here
            console.log(this.account);
        }
    }
};
</script>