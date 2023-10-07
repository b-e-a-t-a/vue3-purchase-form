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
  border: 2px solid $action-color
  border-bottom: 2px solid darken($action-color, 10%)
  border-radius: 3px
  padding: 14px 0
  margin: 40px 0 5px
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