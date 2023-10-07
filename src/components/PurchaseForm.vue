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
              autofocus
              minlength="2"
              errorMessage="Please enter a valid first name"
              :error="(!formData.firstName || formData.firstName.length < 2) && nameBlured"
              @blur="nameBlured = true"
            />
            <FormInput
              v-model="formData.lastName"
              label="Last name"
              placeholder="Musk"
              minlength="2"
              errorMessage="Please enter a valid last name"
              :error="(!formData.lastName || formData.lastName.length < 2) && lastNameBlured"
              @blur="lastNameBlured = true"
            />
            <FormInput
              v-model="formData.email"
              label="Email"
              placeholder="elon@spacex.com"
              type="email"
              class="wide"
              autocomplete="off"
              errorMessage="Please enter a valid email"
              :error="invalidEmail"
              @blur="emailBlured = true"
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
              maxlength="5"
              errorMessage="Please enter a valid postal code"
              :error="invalidPostalCode"
              @blur="postalCodeBlured = true"
            />
            <FormInput
              v-model="formData.phoneNumber"
              label="Phone Number"
              placeholder="(212) 692-93-92"
              type="tel"
              class="wide"
              pattern="[0-9]{3}-[0-9]{3}-[0-9]{2}-[0-9]{2}"
              errorMessage="Please enter a phone number in format (212) 692-93-92"
              :error="invalidPhone"
              @blur="phoneBlured = true"
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
              type="tel"
              class="wide"
              autocomplete="off"
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
              autocomplete="off"
              inputIcon="fa-regular fa-circle-question"
              styleIcon="color: #c2c2c2; font-size: 20px;"
              maxlength="3"
              pattern="^[0-9]{3}$"
              tooltipText="Some info regarding CVV"
              errorMessage="Please enter 3 digit security code"
              :error="invalidSecurityCode"
              @blur="securityCodeBlured = true"
            />
            <FormInput
              v-model="formData.expiredDate"
              label="Expiration date"
              placeholder="MM / YY"
              type="text"
              autocomplete="off"
              maxlength="5"
              pattern="^(0[1-9]|1[0-2])\/([0-9]{2})$"
              errorMessage="Please enter a valid expiration date"
              inputmode="numerical"
              :error="invalidExpiredDate"
              @keyup="formatExpiredDate"
              @blur="expiredDateBlured = true"
            />
            </fieldset>
          <SubmitButton
            text="Complete Purchase"
            type="submit"
            :disabled="!isStep2Valid"
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
import { validateEmail,
  validatePostalCode,
  validatePhoneNumber,
  validateSecurityCode,
  formatExpiredDate,
  validateExpirationDate
} from "../utils/validators.js";

import { ref, computed } from "vue";

defineProps({
  step: {
    type: Number,
    default: 1
  },
  error: {
    type: Boolean,
    default: false
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
  expiredDate: ""
});

const countries = COUNTRIES;

const nameBlured = ref(false);
const lastNameBlured = ref(false);
const emailBlured = ref(false);
const postalCodeBlured = ref(false);
const phoneBlured = ref(false);

const expiredDateBlured = ref(false);
const securityCodeBlured = ref(false);

const invalidEmail = computed(() => {
  return Boolean(!formData.value.email && emailBlured.value) //no value but touched
    || Boolean(emailBlured.value && !validateEmail(formData.value.email)) //value in incorrect format
});

const invalidPostalCode = computed(() => {
  return Boolean(!formData.value.postalCode && postalCodeBlured.value) //no value but touched
    || Boolean(postalCodeBlured.value && !validatePostalCode(formData.value.postalCode)) //value in incorrect format
})

const invalidPhone = computed(() => {
  return Boolean(!formData.value.phoneNumber && phoneBlured.value) //no value but touched
    || Boolean(phoneBlured.value && !validatePhoneNumber(formData.value.phoneNumber)) //value in incorrect format
})

const invalidSecurityCode = computed(() => {
  return Boolean(!formData.value.securityCode && securityCodeBlured.value) ||
    Boolean(securityCodeBlured.value && !validateSecurityCode(formData.value.securityCode))
})

const invalidExpiredDate = computed(() => {
  return Boolean(!formData.value.expiredDate && expiredDateBlured.value)
    || Boolean(formData.value.expiredDate && formData.value.expiredDate.length > 4 && !isExpiredDateValid.value) //validate after completing date
})

const isExpiredDateValid = computed(() => {
  const expireMonth = Number(formData.value.expiredDate.slice(-5, -3));
  const expireYear = Number(formData.value.expiredDate.slice(-2));
  return Boolean(validateExpirationDate(expireMonth, expireYear));
});

const emit = defineEmits(["go-next", "go-previous"]);

const isStep1Valid = computed(() => {
  const valid = formData.value.firstName &&
    formData.value.lastName &&
    !invalidEmail.value &&
    !invalidPostalCode.value &&
    !invalidPhone.value;
  return valid;
});

const goNext = () => {
  nameBlured.value = true;
  lastNameBlured.value = true;
  emailBlured.value = true;
  postalCodeBlured.value = true;
  phoneBlured.value = true;

  if (isStep1Valid.value) {
    emit("go-next");
  }
};

const goPrevious = () => {
  emit("go-previous");
};

const isStep2Valid = computed(() => {
  return true;
});

const isFormValid = computed(() => {
  console.log('isFormValid')
});


const purchase = () => {
  expiredDateBlured.value = true;
  securityCodeBlured.value = true;

  try {
    console.log('purchase', formData._value);
  } catch (error) {
    console.log("error", error);
  }
};
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