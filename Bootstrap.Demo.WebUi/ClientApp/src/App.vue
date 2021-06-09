<template>
    <div>
        <nav-menu></nav-menu>
        <b-container>
            <router-view />
        </b-container>
    </div>
</template>

<script>
    import NavMenu from './components/NavMenu.vue';

    export default {
        name: 'App',
        components: {
            NavMenu
        }
    };
</script>

<style>
</style>
