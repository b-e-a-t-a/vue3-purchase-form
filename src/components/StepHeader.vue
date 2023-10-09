<template>
  <div class="step">
    <span class="step-number">{{ step }}</span>
    <span>
      <h5 v-if="step === 1">Personal Information</h5>
      <h5 v-if="step === 2">Payment details</h5>
    </span>
  </div>
</template>

<script setup>
defineProps({
  step: {
    type: Number,
    default: 1
  }
})
</script>

<style lang="sass" scoped>
@import "../assets/main.sass"
.step
  display: flex
  justify-content: flex-start
  margin: 0 auto
  width: 100%
  position: relative
  margin-bottom: 20px
  &-number
    display: flex
    justify-content: center
    align-items: center
    min-width: 20px
    min-height: 20px
    margin-right: 10px
    margin-left: calc(0px - $step-margin)
    color: $color-white
    background-color: black
    border-radius: 50%
    font-size: 15px
    font-weight: 700
    line-height: 1
    vertical-align: middle

@media screen and (max-width: 600px)
  .step-number
    margin-left: 0
</style>