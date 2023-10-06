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
</style>