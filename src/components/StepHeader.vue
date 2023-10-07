<template>
  <div class="step">
    <span class="step-number">{{ step }}</span>
    <span>
      <h4 v-if="step === 1">Personal Information</h4>
      <h4 v-if="step === 2">Payment details</h4>
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
    min-width: 25px
    min-height: 25px
    margin-right: 5px
    margin-left: calc(0px - $step-margin)
    color: white
    background-color: black
    border-radius: 50%
    font-size: 15px
    font-weight: 700
    line-height: 1
    vertical-align: middle
</style>