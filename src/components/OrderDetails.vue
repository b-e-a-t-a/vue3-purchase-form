<template>
  <fieldset class="fieldset">
    <div  class="card">
      <h5>Your order</h5>
      <section class="order-section items">
        <div
          v-for="(item, idx) in items"
          :key="idx"
          class="order-item"
        >
          <span>{{ item.name }}</span>
          <span class="price">$ {{ item.price }}</span>
        </div>
      </section>
      <section class="order-section">
        <div class="order-item">
          <span>Total purchases</span>
          <span class="price">$ {{ subtotal.toFixed(2) }}</span>
        </div>
        <div class="order-item">
          <span>Estimated tax</span>
          <span class="price">$ {{ tax }}</span>
        </div>
      </section>
      <section class="order-summary">
        <div class="order-item">
          <span>Total</span>
          <span class="price">$ {{ total }}</span>
        </div>
      </section>
    </div>
  </fieldset>
</template>

<script setup>
import { ref } from "vue";

const items = ref([
  {
    name: "Apple Watch Sport",
    price: 580
  },
  {
    name: "Modern Buckle",
    price: 380
  },
]);
const subtotal = ref(960.00);
const tax = ref(0);
const total = ref(960);
</script>

<style lang="sass" scoped>
@import "../assets/main.sass"
.fieldset
  background-color: $color-white
  border-radius: 3px
  padding: 6px
  margin-left: 10px
  border-bottom: solid 2px $border-bottom-color
.card
  border: 2px dotted #f0f0f0
  border-radius: 3px
  height: 100%
  padding: 6px 12px
  line-height: 1.8em
  .order-section
    border-bottom: 2px dotted #f0f0f0
    padding: 5px 0
    &.items
      padding-bottom: 15px
    .price
      white-space: nowrap
  .order-item
    font-size: 13px
    display: flex
    justify-content: space-between
    align-items: center
  .order-summary
    padding: 5px 0
    .order-item > span
      font-weight: 700
    .price
      font-size: 22px

@media screen and (max-width: 900px)
  .fieldset
    margin-left: 0
</style>