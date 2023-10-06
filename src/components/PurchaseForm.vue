<template>
  <section class="purchase-form">
    <transition name="form-fade">
      <section v-show="step === 1">
        <form @submit.prevent="goNext">
          <fieldset class="fieldset">
            <FormInput
              v-model="formData.firstName"
              label="First name"
              placeholder="Elon"
            />
            <FormInput
              v-model="formData.lastName"
              label="Last name"
              placeholder="Musk"
            />
            <FormInput
              v-model="formData.email"
              label="Email"
              placeholder="elon@spacex.com"
              type="email"
              class="wide"
            />

            <div>
              <label>Country</label>
              <select v-model="formData.country">
                <option
                  v-for="(country, idx) in countries"
                  :key="idx"
                  :value="country"
                  :selected="country === formData.country"
                >
                  {{ country }}
                </option>
              </select>
            </div>

            <FormInput
              v-model="formData.postalCode"
              label="Postal Code"
              placeholder="10001"
              type="text"
            />
            <FormInput
              v-model="formData.phoneNumber"
              label="Phone Number"
              placeholder="(212) 692-93-92"
              type="tel"
              class="wide"
            />
          </fieldset>

          <button type="submit">
            <i class="fa-solid fa-cart-shopping" style="color: white;"></i>
            <span>Next</span>
          </button>

        </form>
      </section>
    </transition>

    <transition name="form-fade">
      <section v-show="step === 2">
        PAYMENT DETAILS
        <button type="button" @click="goPrevious">
          <span>Previous</span>
        </button>
      </section>
    </transition>

  </section>
</template>

<script setup>
import FormInput from "./FormInput.vue";

import { ref } from "vue";

defineProps({
  step: {
    type: Number,
    default: 1
  }
})

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  country: "United States",
  postalCode: "",
  phoneNumber: ""
});

const countries = ref([
  "Poland",
  "United States"
]);

const emit = defineEmits(["go-next", "go-previous"]);

const goNext = () => {
  emit("go-next");
};
const goPrevious = () => {
  emit("go-previous");
};
</script>

<style lang="sass" scoped>
@import "../assets/main.sass"

.form-fade-enter-active,
.form-fade-leave-active
  transition: opacity 1s ease

.form-fade-enter-from,
.form-fade-leave-to
  opacity: 0

button
  width: 100%

@media screen and (min-width: 900px)
  .fieldset
    display: grid
    grid-template-columns: 1fr 1fr
    column-gap: 10px
    row-gap: 15px
  .wide
    grid-column: 1 / span 2
    justify-self: start
    width: 100%

</style>