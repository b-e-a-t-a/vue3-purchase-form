<template>
  <button
    class="submit-btn"
    :type="type"
  >
    <slot name="icon"></slot>
    <slot name="text">{{ text }}</slot>
  </button>
</template>

<script setup>
defineProps({
  text: {
    type: String,
    default: "Click"
  },
  type: {
    type: String,
    default: "button"
  }
})
</script>

<style lang="sass" scoped>
@import "../assets/main.sass"
.submit-btn
  width: 100%
  background-color: $action-color
  border: 1px solid $action-color
  border-radius: 3px
  padding: 10px 0
  margin: 30px 0 5px
  color: white
  cursor: pointer
  outline: none
  display: flex
  justify-content: center
  align-items: center
  transition: background-color 0.1s ease-in, color 0.1s ease-in, border-color 0.1s ease-in
  &:hover
    background-color: darken($action-color, 15%)
    border-color: darken($action-color, 15%)
</style>