<template>
  <div class="form-input">
    <label>{{ label }}</label>
    <input
      :value="modelValue"
      class="input"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
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
  }
})
</script>

<style lang="sass" scoped>
.form-input
  background-color: white
  border-radius: 3px
  padding: 5px 10px
  border-bottom: solid 1px rgba(0, 0, 0, 0.3)
  line-height: 1.3em
</style>