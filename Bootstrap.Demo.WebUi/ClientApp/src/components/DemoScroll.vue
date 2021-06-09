<template>
    <div>
        <b-container fluid class="mb-3">
            <b-row class="mb-1">
                <b-col cols="3">Variant</b-col>
                <b-col>
                    <b-form-select v-model="variant" :options="variants"></b-form-select>
                </b-col>
            </b-row>
            <b-row class="mb-1">
                <b-col cols="3">Size</b-col>
                <b-col>
                    <b-form-select v-model="size" :options="sizes"></b-form-select>
                </b-col>
            </b-row>
        </b-container>

        <div class="text-center">
            <div class="d-inline-block" v-bind:class="cssClasses" style="height: 100px; max-width: 200px; overflow-y: scroll;">
                Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum.
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
                sizes: ['normal', 'sm', 'lg'],
                variant: 'primary',
                size: 'normal'
            };
        },
        computed: {
            cssClasses: function () {
                var classes = {
                    'custom-scrollbar': true
                };

                if (this.variant) {
                    classes[`custom-scrollbar--${this.variant}`] = true;
                }

                if (this.size) {
                    classes[`custom-scrollbar--${this.size}`] = true;
                }

                return classes;
            }
        }
    };
</script>
