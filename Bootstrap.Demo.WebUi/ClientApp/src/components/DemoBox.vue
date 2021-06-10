<template>
    <b-container fluid class="mb-3">
        <b-row>
            <b-col md="6">
                <b-form-group label="Variant:" label-size="sm" label-for="scroll-variant" label-cols-sm="3">
                    <b-form-select id="scroll-variant" size="sm" v-model="variant" :options="variants"></b-form-select>
                </b-form-group>
                <b-form-group label="Size:" label-size="sm" label-for="scroll-size" label-cols-sm="3">
                    <b-form-select id="scroll-size" size="sm" v-model="size" :options="sizes"></b-form-select>
                </b-form-group>
            </b-col>
            <b-col>
                <div v-bind:class="boxClasses">
                    <div class="box__header" v-if="showHeader">Header</div>
                    <div class="box__body">Body</div>
                    <div class="box__footer" v-if="showFooter">Footer</div>
                </div>
            </b-col>
        </b-row>
    </b-container>
</template>

<script>
    export default {
        data() {
            return {
                variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
                variant: 'primary',
                sizes: ['', 'sm', 'lg'],
                size: 'normal',
                showHeader: true,
                showFooter: true
            };
        },
        computed: {
            boxClasses: function () {
                var classes = {
                    box: true
                };

                if (this.variant) {
                    classes[`box--${this.variant}`] = true;
                }

                if (this.size) {
                    classes[`box--${this.size}`] = true;
                }

                return classes;
            }
        }
    };
</script>
