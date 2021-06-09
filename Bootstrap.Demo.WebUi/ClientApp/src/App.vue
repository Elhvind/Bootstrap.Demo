<template>
    <nav-menu></nav-menu>
    <router-view />
</template>

<script>
    import NavMenu from './components/NavMenu.vue'

    export default {
        name: 'App',
        components: {
            NavMenu
        }
    }
</script>

<style>
    #app {
        text-align: center;
        color: #2c3e50;
        margin-top: 60px;
    }
</style>
