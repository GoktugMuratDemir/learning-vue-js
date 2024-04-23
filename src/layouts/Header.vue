<template>
    <!-- Header component -->
    <header class="header">
        <!-- Navigation bar -->
        <nav class="header__nav">
            <!-- Loop through all routes and create a link for each one -->
            <router-link class="header__nav-item" v-for="(route, index) in routes" :key="index" :to="route.path">
                {{ route.name }}
            </router-link>
        </nav>
    </header>
</template>

<script>
import { routes } from '@/router';

export default {
    name: 'Header',
    data() {
        return {
            routes
        }
    }
}
</script>