
<template>
  <main class="main">
    <StepHeader :step="step" class="header"/>
    <PurchaseForm
      :step="step"
      class="main-view"
      @go-next="increaseStep"
      @go-previous="decreaseStep"
    />
    <OrderDetails class="sidebar" :class="{'fitted' : step === 1}"/>
  </main>
</template>

<script setup>
import StepHeader from "../components/StepHeader.vue";
import OrderDetails from "../components/OrderDetails.vue";
import PurchaseForm from "../components/PurchaseForm.vue";

import { ref } from "vue";

let step = ref(1);

const increaseStep = () => {
  step.value++;
}
const decreaseStep = () => {
  step.value--;
}
</script>

<style lang="sass" scoped>
.main
  display: grid
  gap: 30px
  //line-height: 2

@media screen and (min-width: 900px)
  .main
    grid-template-columns: 2fr 1fr
    grid-template-rows: auto
    grid-template-areas: "header header" "main sidebar"
    gap: 0
  .header
    grid-area: header
  .main-view
    grid-area: main
  .sidebar
    grid-area: sidebar
  .fitted
    max-height: calc(100% - 51px - 5px - 40px) // button heigh and button margin
</style>