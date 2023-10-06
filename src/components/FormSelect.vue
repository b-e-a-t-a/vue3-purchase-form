<template>
  <div class="form-select">
    <label>{{ label }}</label>
    <select
      :value="modelValue"
      class="select"
      v-bind="{
        ...$attrs,
        onChange: ($event) => { $emit('update:modelValue', $event.target.value) }
      }"
    >
      <option
        v-for="(option, idx) in options"
        :key="idx"
        :value="option"
        :selected="option === modelValue"
      >
        {{ option }}
      </option>
    </select>
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
  options: {
    type: Array,
    required: true
  }
})

</script>

<style lang="sass" scoped>
</style>