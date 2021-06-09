<template>
    <header>
        <b-navbar toggleable="md" type="dark" variant="secondary" class="shadow">
            <b-container>
                <b-navbar-brand :to="{ name: 'Home' }">
                    <b-icon icon="bootstrap-fill" class="text-primary"></b-icon>
                    Bootstrap Demo
                </b-navbar-brand>
                <b-navbar-toggle target="nav-menu-collapse"></b-navbar-toggle>
                <b-collapse id="nav-menu-collapse" is-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-item :to="{ name: 'Home' }">Home</b-nav-item>
                        <b-nav-item :to="{ name: 'Counter' }">Counter</b-nav-item>
                        <b-nav-item :to="{ name: 'Demo' }">Demo Page</b-nav-item>
                    </b-navbar-nav>
                    <b-navbar-nav class="ml-auto">
                        <b-nav-form>
                            <b-form-input size="sm" class="mr-sm-2" placeholder="Søg"></b-form-input>
                            <b-button size="sm" variant="primary" class="my-2 my-md-0" type="submit">Search</b-button>
                        </b-nav-form>
                    </b-navbar-nav>
                </b-collapse>
            </b-container>
        </b-navbar>
    </header>
</template>

<script>
    export default {
        name: 'NavMenu'
    };
</script>
