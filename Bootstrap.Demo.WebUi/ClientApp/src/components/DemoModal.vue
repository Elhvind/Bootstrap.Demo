<template>
    <div>
        <b-button @click="show=true" variant="primary">Show Customizable Modal</b-button>

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
            <b-form-radio-group id="bad-modal-footer-var" v-model="badModalFooterVar" name="bad-modal-footer-var">
                <b-form-radio :value="0">0</b-form-radio>
                <b-form-radio :value="1">1</b-form-radio>
                <b-form-radio :value="2">2</b-form-radio>
            </b-form-radio-group>
            <template #modal-footer="{ ok, cancel, hide }">
                <template v-if="badModalFooterVar == 0">
                    <b-button size="sm" variant="success" @click="ok()">OK</b-button>
                    <b-button size="sm" variant="secondary" @click="cancel()">Cancel</b-button>
                    <b-button size="sm" variant="danger" @click="hide('Delete')">Delete</b-button>
                </template>
                <template v-if="badModalFooterVar == 1">
                    <b-button size="sm" variant="primary" @click="ok()">Accept</b-button>
                    <b-button size="sm" variant="primary" @click="cancel()">Cancel</b-button>
                    <b-button size="sm" variant="primary" @click="hide('Delete')">Delete</b-button>
                </template>
                <template v-if="badModalFooterVar == 2">
                    <b-button size="sm" variant="primary" @click="hide('Delete')">Delete</b-button>
                    <b-button size="sm" variant="primary" @click="cancel()">Cancel</b-button>
                    <b-button size="sm" variant="primary" @click="ok()">Accept</b-button>
                </template>
            </template>
        </b-modal>

        <b-modal id="modal-good" title="Good Modal">
            <b-form-radio-group id="good-modal-footer-var" v-model="goodModalFooterVar" name="good-modal-footer-var">
                <b-form-radio :value="0">0</b-form-radio>
                <b-form-radio :value="1">1</b-form-radio>
                <b-form-radio :value="2">2</b-form-radio>
                <b-form-radio :value="3">3</b-form-radio>
            </b-form-radio-group>
            <template #modal-footer="{ ok, cancel, hide }">
                <template v-if="goodModalFooterVar == 0">
                    <b-button size="sm" variant="link" @click="hide('Delete')">Delete</b-button>
                    <b-button size="sm" variant="link" @click="cancel()">Close</b-button>
                    <b-button size="sm" variant="primary" @click="ok()">Accept</b-button>
                </template>
                <template v-if="goodModalFooterVar == 1">
                    <b-button size="sm" variant="outline-primary" @click="hide('Delete')">Delete</b-button>
                    <b-button size="sm" variant="outline-primary" @click="cancel()">Close</b-button>
                    <b-button size="sm" variant="primary" @click="ok()">Accept</b-button>
                </template>
                <template v-if="goodModalFooterVar == 2">
                    <b-button size="sm" variant="link" @click="hide('Delete')">Delete</b-button>
                    <b-button size="sm" variant="link" @click="cancel()">Close</b-button>
                    <b-button size="sm" variant="outline-primary" @click="ok()">Accept</b-button>
                </template>
                <template v-if="goodModalFooterVar == 3">
                    <b-button size="sm" variant="link" @click="hide('Delete')">Delete</b-button>
                    <b-button size="sm" variant="outline-primary" @click="cancel()">Close</b-button>
                    <b-button size="sm" variant="primary" @click="ok()">Accept</b-button>
                </template>
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
                footerTextVariant: 'dark',
                badModalFooterVar: 0,
                goodModalFooterVar: 0
            };
        }
    };
</script>
