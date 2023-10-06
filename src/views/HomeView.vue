
<template>
  <main>
    <h2>Personal Information</h2>
    <div class="wrapper">
      <section class="form">
        <transition name="form-fade">
          <section v-show="step === 1">
            <form @submit.prevent="goNext">
              <fieldset>
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
                />

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
            <button type="button" @click="step--">
              <span>Previous</span>
            </button>
          </section>
        </transition>

      </section>

      <section>
        <OrderDetails />
      </section>
    </div>

    <pre>{{ formData }}</pre>
  </main>
</template>

<script setup>
import FormInput from "../components/FormInput.vue";
import OrderDetails from "../components/OrderDetails.vue";

import { ref } from "vue";

let step = ref(1);
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

const goNext = () => {
  console.log("Go Next Step 2", step);
  step.value++;
}

</script>

<style lang="sass" scoped>
.form-fade-enter-active,
.form-fade-leave-active
  transition: opacity 1s ease

.form-fade-enter-from,
.form-fade-leave-to
  opacity: 0

</style>