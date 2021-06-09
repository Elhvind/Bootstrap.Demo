<template>
    <div>
        <b-form @submit="onSubmit" @reset="onReset" v-if="show">
            <b-form-group id="input-group-1"
                          label="Email address:"
                          label-for="input-1"
                          description="We'll never share your email with anyone else."
                          label-cols-lg="3">
                <b-form-input id="input-1"
                              v-model="form.email"
                              type="email"
                              placeholder="Enter email"
                              :state="state"
                              required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-2" label="Your Name:" label-for="input-2" label-cols-lg="3">
                <b-form-input id="input-2"
                              v-model="form.name"
                              placeholder="Enter name"
                              :state="state"
                              required></b-form-input>
            </b-form-group>

            <b-form-group id="input-group-3" label="Food:" label-for="input-3" label-cols-lg="3">
                <b-form-select id="input-3"
                               v-model="form.food"
                               :options="foods"
                               :state="state"
                               required></b-form-select>
            </b-form-group>

            <b-form-group id="input-group-4" label="State:" v-slot="{ ariaDescribedby }" label-cols-lg="3">
                <b-form-radio-group id="form-state-radios" label="State:" v-model="state" :aria-describedby="ariaDescribedby" name="form-state-radios" class="my-2">
                    <b-form-radio :value="null">Null</b-form-radio>
                    <b-form-radio :value="false">False</b-form-radio>
                    <b-form-radio :value="true">True</b-form-radio>
                </b-form-radio-group>
            </b-form-group>

            <div class="text-right">
                <b-button type="reset" variant="outline-primary" class="mr-3">Reset</b-button>
                <b-button type="submit" variant="primary">Submit</b-button>
            </div>
        </b-form>
    </div>
</template>

<script>
    export default {
        data() {
            return {
                form: {
                    email: '',
                    name: '',
                    food: null,
                    checked: []
                },
                foods: [
                    {
                        text: 'Select One',
                        value: null
                    },
                    'Carrots',
                    'Beans',
                    'Tomatoes',
                    'Corn'
                ],
                show: true,
                state: null
            };
        },
        methods: {
            onSubmit(event) {
                event.preventDefault();
                alert(JSON.stringify(this.form));
            },
            onReset(event) {
                event.preventDefault();
                // Reset our form values
                this.form.email = '';
                this.form.name = '';
                this.form.food = null;
                this.form.checked = [];
                // Trick to reset/clear native browser form validation state
                this.show = false;
                this.state = null;
                this.$nextTick(() => {
                    this.show = true;
                });
            }
        }
    };
</script>
