<template>
  <section class="purchase-form">
    <form @submit.prevent="purchase">
      <transition name="form-fade" mode="out-in">
        <section v-show="step === 1">
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
            <FormSelect
              v-model="formData.country"
              label="Country"
              :options="countries"
            />
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

          <SubmitButton
            text="Next"
            @click="goNext"
          >
            <template #icon>
              <i
                class="fa-solid fa-cart-shopping"
                style="color: white; marginRight: 5px; font-size: 15px"
              ></i>
            </template>
          </SubmitButton>
        </section>
      </transition>

      <transition name="form-fade" mode="out-in">
        <section v-show="step === 2">
          <fieldset class="fieldset">
            <FormInput
              v-model="formData.cardNumber"
              label="Credit Card Number"
              placeholder="0000 - 0000 - 0000 - 0000"
              class="wide"
              inputIcon="fa-brands fa-cc-visa"
              styleIcon="color: white;
                background-color: #243c64;
                border: 1px solid #c2c2c2;
                font-size: 20px;"
            />
            <FormInput
              v-model="formData.securityCode"
              label="Security code"
              placeholder="***"
              inputIcon="fa-regular fa-circle-question"
              styleIcon="color: #c2c2c2; font-size: 20px;"
            />
            <FormInput
              v-model="formData.expireDate"
              label="Expiration date"
              placeholder="MM / YY"
              type="text"
            />
            </fieldset>
          <SubmitButton
            text="Complete Purchase"
            type="submit"
            @click="purchase"
          >
            <template #icon>
              <i
                class="fa-solid fa-cart-shopping"
                style="color: white; marginRight: 5px; font-size: 15px"
              ></i>
            </template>
          </SubmitButton>
          <div class="back-btn" @click="goPrevious">
            <span class="back-icon">
              <i class="fa-solid fa-arrow-left" style="marginRight: 10px; font-size: 10px">
              </i>
            </span>
            <span class="back-text">previous step</span>
          </div>
        </section>
      </transition>
    </form>
  </section>
</template>

<script setup>
import FormInput from "./FormInput.vue";
import FormSelect from "./FormSelect.vue";
import SubmitButton from "./SubmitButton.vue";
import { COUNTRIES } from "../utils/content.js";

import { ref } from "vue";

defineProps({
  step: {
    type: Number,
    default: 1
  }
});

const formData = ref({
  firstName: "",
  lastName: "",
  email: "",
  country: "United States",
  postalCode: "",
  phoneNumber: "",
  cardNumber: "",
  securityCode: "",
  expireDate: ""
});

const countries = COUNTRIES;

const emit = defineEmits(["go-next", "go-previous"]);

const goNext = () => {
  emit("go-next");
};
const goPrevious = () => {
  emit("go-previous");
};
const purchase = () => {
  console.log('purchase');
}
</script>

<style lang="sass" scoped>
@import "../assets/main.sass"
.back-btn
  display: flex
  align-items: center
  justify-content: center
  width: 100%
  padding: 8px 0
  cursor: pointer
  color: $placeholder-color
  font-size: 14px
  border: 1px solid transparent
  &:hover
    border-color: $placeholder-color
    border-bottom: 2px solid darken($placeholder-color, 10%)
    color: darken($placeholder-color, 30%)
.form-fade-enter-active
  transition: opacity 0.3s ease-in-out
.form-fade-leave-active
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1)

.form-fade-enter-from,
.form-fade-leave-to
  opacity: 0

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