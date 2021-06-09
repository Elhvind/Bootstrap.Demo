<template>
    <div>
        <b-button @click="$bvModal.show('modal-bad')" variant="primary">Show Bad Modal</b-button>

        <b-button @click="$bvModal.show('modal-good')" variant="primary" class="ml-3">Show Good Modal</b-button>

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
