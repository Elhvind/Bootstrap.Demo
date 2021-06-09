<template>
    <b-row>
        <b-col md="auto" class="mb-3">
            <b-calendar v-model="selectedDate"
                        @context="onContext"
                        locale="en-US"
                        hide-header
                        :start-weekday="1"
                        nav-button-variant="secondary"
                        :date-info-fn="dateClass">
            </b-calendar>
        </b-col>
        <b-col class="mb-3">
            <b-overlay :show="fetchingWeatherForecast">
                <b-card v-if="weatherForecast" :header="context.selectedFormatted">
                    <b-form-group label="Select unit of temperature" v-slot="{ ariaDescribedby }">
                        <b-form-radio-group v-model="selectedTemperature"
                                            :options="optionsTemperature"
                                            :aria-describedby="ariaDescribedby"
                                            name="radio-temperature-options">
                        </b-form-radio-group>
                    </b-form-group>
                    <p class="d-flex mb-0">
                        Temperature: {{ temperature }}
                        <b-badge variant="primary" class="ml-3 my-auto">
                            {{ weatherForecast.summary }}
                        </b-badge>
                    </p>
                </b-card>
            </b-overlay>
        </b-col>
    </b-row>
</template>

<script>
    import axios from 'axios';

    export default {
        name: 'WeatherForecast',
        data() {
            return {
                selectedTemperature: 'C',
                optionsTemperature: [
                    { text: 'Celsius', value: 'C' },
                    { text: 'Fahrenheit', value: 'F' }
                ],
                selectedDate: '',
                context: null,
                weatherForecast: null,
                fetchingWeatherForecast: false
            };
        },
        computed: {
            temperature: function () {
                if (this.weatherForecast) {
                    if (this.selectedTemperature === 'C') {
                        return this.weatherForecast.temperatureC;
                    } else if (this.selectedTemperature === 'F') {
                        return this.weatherForecast.temperatureF;
                    } else {
                        return null;
                    }
                } else {
                    return null;
                }
            }
        },
        methods: {
            onContext(ctx) {
                this.context = ctx;
                if (ctx.selectedDate) {
                    this.getWeatherForecast();
                } else {
                    this.weatherForecast = null;
                }
            },
            dateClass(ymd, date) {
                const day = date.getDate();
                return day >= 10 && day <= 20 ? 'table-info' : '';
            },
            getWeatherForecast() {
                var self = this;
                this.fetchingWeatherForecast = true;
                axios.get(`/weatherforecast/${this.selectedDate}`)
                    .then((response) => {
                        this.weatherForecast = response.data;
                    })
                    .catch(function (error) {
                        alert(error);
                    })
                    .finally(function () {
                        self.fetchingWeatherForecast = false;
                    });
            }
        }
    };
</script>
