<template>
  <div class="form-input">
    <label>{{ label }}</label>
    <input
      :value="modelValue"
      class="input"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span v-if="inputIcon">
      <i :class="inputIcon" :style="styleIcon"></i>
    </span>
  </div>
</template>

<script setup>
defineProps({
  label: {
    type: String,
    default: ""
  },
  modelValue: {
    type: [String, Number],
    default: ""
  },
  inputIcon: {
    type: String,
    default: ""
  },
  styleIcon: {
    type: String,
    default: ""
  }
})
</script>

<style lang="sass" scoped>
@import "../assets/main.sass"
.form-input
  background-color: white
  border-radius: 3px
  padding: 3px 10px 7px
  border-bottom: solid 2px $border-bottom-color
  line-height: 1.3em
  position: relative
  span
    position: absolute
    left: calc(100% - 10px)
    bottom: 50%
    transform: translate(-100%, 50%)
</style>