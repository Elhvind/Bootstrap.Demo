<template>
    <div>
        <header class="d-flex align-items-center">
            <h1>Heading 1</h1>

        </header>

        <hr class="border-secondary" />

        <h2>Heading 2</h2>

        <div class="d-flex">
            <b-button-toolbar key-nav aria-label="Toolbar with button groups" class="align-items-center mx-auto mb-3">
                <b-button size="lg" variant="primary" class="mr-2">Large 1</b-button>
                <b-button size="lg" variant="primary" class="ml-2">Large 2</b-button>
            </b-button-toolbar>
        </div>
        <div class="d-flex">
            <b-button-toolbar key-nav aria-label="Toolbar with button groups" class="mx-auto mb-3">
                <b-button-group class="mr-1">
                    <b-button size="sm" variant="outline-secondary">&laquo;</b-button>
                    <b-button size="sm" variant="outline-secondary">&lsaquo;</b-button>
                </b-button-group>
                <b-button-group class="mx-1">
                    <b-button size="sm" variant="secondary">Edit</b-button>
                    <b-button size="sm" variant="secondary" disabled>Undo</b-button>
                    <b-button size="sm" variant="secondary" disabled>Redo</b-button>
                </b-button-group>
                <b-button-group class="ml-1">
                    <b-button size="sm" variant="outline-secondary">&rsaquo;</b-button>
                    <b-button size="sm" variant="outline-secondary">&raquo;</b-button>
                </b-button-group>
            </b-button-toolbar>
        </div>

        <hr class="border-secondary" />

        <h2>Heading 2</h2>
        <demo-form></demo-form>

        <hr class="border-secondary" />

        <h2>Heading 2</h2>
        <weather-forecast></weather-forecast>
    </div>
</template>

<script>
    import WeatherForecast from '@/components/WeatherForecast';
    import DemoForm from '@/components/DemoForm';

    export default {
        name: 'Demo',
        components: {
            'weather-forecast': WeatherForecast,
            'demo-form': DemoForm
        },
        data() {
            return {
                value: '',
                context: null
            };
        },
        methods: {
            onContext(ctx) {
                this.context = ctx;
            }
        }
    };
</script>
