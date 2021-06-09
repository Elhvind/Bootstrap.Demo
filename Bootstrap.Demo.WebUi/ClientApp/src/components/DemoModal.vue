<template>
    <div>
        <b-button @click="show=true" variant="primary">Show Modal</b-button>

        <b-button @click="$bvModal.show('modal-bad')" variant="primary" class="ml-3">Show Bad Modal</b-button>

        <b-button @click="$bvModal.show('modal-good')" variant="primary" class="ml-3">Show Good Modal</b-button>

        <b-modal v-model="show"
                 title="Modal Variants"
                 :header-bg-variant="headerBgVariant"
                 :header-text-variant="headerTextVariant"
                 :body-bg-variant="bodyBgVariant"
                 :body-text-variant="bodyTextVariant"
                 :footer-bg-variant="footerBgVariant"
                 :footer-text-variant="footerTextVariant">
            <b-container fluid>
                <b-row class="mb-1 text-center">
                    <b-col cols="3"></b-col>
                    <b-col>Background</b-col>
                    <b-col>Text</b-col>
                </b-row>

                <b-row class="mb-1">
                    <b-col cols="3">Header</b-col>
                    <b-col>
                        <b-form-select v-model="headerBgVariant"
                                       :options="variants"></b-form-select>
                    </b-col>
                    <b-col>
                        <b-form-select v-model="headerTextVariant"
                                       :options="variants"></b-form-select>
                    </b-col>
                </b-row>

                <b-row class="mb-1">
                    <b-col cols="3">Body</b-col>
                    <b-col>
                        <b-form-select v-model="bodyBgVariant"
                                       :options="variants"></b-form-select>
                    </b-col>
                    <b-col>
                        <b-form-select v-model="bodyTextVariant"
                                       :options="variants"></b-form-select>
                    </b-col>
                </b-row>

                <b-row>
                    <b-col cols="3">Footer</b-col>
                    <b-col>
                        <b-form-select v-model="footerBgVariant"
                                       :options="variants"></b-form-select>
                    </b-col>
                    <b-col>
                        <b-form-select v-model="footerTextVariant"
                                       :options="variants"></b-form-select>
                    </b-col>
                </b-row>
            </b-container>

            <template #modal-footer>
                <div class="w-100">
                    <p class="float-left">Modal Footer Content</p>
                    <b-button variant="primary"
                              size="sm"
                              class="float-right"
                              @click="show=false">
                        Close
                    </b-button>
                </div>
            </template>
        </b-modal>

        <b-modal id="modal-bad" title="Bad Modal">
            <p class="mb-0">Modal Body with button</p>
            <template #modal-footer="{ ok, cancel, hide }">
                <b-button size="sm" variant="success" @click="ok()">
                    OK
                </b-button>
                <b-button size="sm" variant="danger" @click="cancel()">
                    Cancel
                </b-button>
                <!-- Button with custom close trigger value -->
                <b-button size="sm" variant="outline-secondary" @click="hide('forget')">
                    Forget it
                </b-button>
            </template>
        </b-modal>

        <b-modal id="modal-good" title="Good Modal">
            <p class="mb-0">Modal Body with button</p>
            <template #modal-footer="{ ok, cancel, hide }">
                <b-button size="sm" variant="link" @click="hide('forget')">
                    Forget it
                </b-button>
                <b-button size="sm" variant="outline-primary" @click="cancel()">
                    Cancel
                </b-button>
                <b-button size="sm" variant="primary" @click="ok()">
                    OK
                </b-button>
            </template>
        </b-modal>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                show: false,
                variants: ['primary', 'secondary', 'success', 'warning', 'danger', 'info', 'light', 'dark'],
                headerBgVariant: 'dark',
                headerTextVariant: 'light',
                bodyBgVariant: 'light',
                bodyTextVariant: 'dark',
                footerBgVariant: 'warning',
                footerTextVariant: 'dark'
            };
        }
    };
</script>
