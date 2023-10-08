<template>
  <div class="form-select">
    <label :for="name">{{ label }}</label>
    <select
      :value="modelValue"
      :name="name"
      :id="name"
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
  },
  name: {
    type: String,
    default: ""
  }
})

</script>

<style lang="sass" scoped>
@import "../assets/main.sass"
.form-select
  background-color: white
  border-radius: 3px
  padding: 5px 10px
  border-bottom: solid 1px rgba(0, 0, 0, 0.3)
  line-height: 1.3em
  &:focus-within
    border: 1px solid $action-color
</style>