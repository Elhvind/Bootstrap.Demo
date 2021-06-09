<template>
    <b-container class="py-5">
        <b-row>
            <b-col lg="9">
                <h1>Demo Page</h1>

                <hr class="my-5 border-secondary" />

                <demo-scroll></demo-scroll>

                <hr class="my-5 border-secondary" />

                <h2>Demo Modal</h2>
                <demo-modal></demo-modal>

                <hr class="my-5 border-secondary" />

                <h2>Demo Form</h2>
                <demo-form></demo-form>

                <hr class="my-5 border-secondary" />

                <h2>Demo Table 2</h2>
                <demo-table></demo-table>

                <hr class="my-5 border-secondary" />

                <h2>Buttons</h2>

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
            </b-col>
            <b-col>
                <b-card bg-variant="light" title="Lorem Ipsum" class="mb-3">
                    <b-card-text>Nulla molestie semper <a href="#">libero</a>, quis condimentum nisi rutrum molestie. Aliquam a elementum dui. Quisque consequat tortor facilisis leo bibendum sagittis. Sed tellus magna, congue ac.</b-card-text>
                    <b-button block variant="primary">Læs mere</b-button>
                </b-card>
                <b-card bg-variant="light" title="Duis a faucibus" class="mb-3">
                    <b-card-text>Pellentesque hendrerit felis et odio maximus tempus. <a href="#">Donec ullamcorper</a> ante vel mi porttitor pharetra. Nullam.</b-card-text>
                    <b-button block variant="primary">Læs mere</b-button>
                </b-card>
                <b-card bg-variant="light" title="Maecenas euismod mattis" class="mb-3">
                    <b-card-text>Cras auctor odio vel dolor rutrum iaculis. Nam eget mi nisi. Integer ac <a href="#">feugiat</a> nisl. Vivamus feugiat mi metus, et elementum libero ultrices a. Curabitur ac lectus ac nulla pharetra fringilla. Vivamus faucibus sem diam.</b-card-text>
                    <b-button block variant="primary">Læs mere</b-button>
                </b-card>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    import DemoForm from '@/components/DemoForm';
    import DemoTable from '@/components/DemoTable';
    import DemoModal from '@/components/DemoModal';
    import DemoScroll from '@/components/DemoScroll';

    export default {
        name: 'Demo',
        components: {
            'demo-form': DemoForm,
            'demo-table': DemoTable,
            'demo-modal': DemoModal,
            'demo-scroll': DemoScroll
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
