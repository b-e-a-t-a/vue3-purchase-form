<template>
  <div class="form-input" :class="{'error': error}">
    <label :for="name">{{ label }}</label>
    <input
      :value="modelValue"
      :name="name"
      :id="name"
      isTooltipVisible
      class="input"
      v-bind="$attrs"
      @input="$emit('update:modelValue', $event.target.value)"
    >
    <span v-if="inputIcon" class="tooltip-bg"
      @mouseover="isTooltipVisible = true"
      @mouseleave="isTooltipVisible = false"
    >
      <i :class="inputIcon" :style="styleIcon"></i>
      <span v-show="isTooltipVisible && tooltipText" class="tooltip">
        {{tooltipText}}
      </span>
    </span>
    <div v-if="error" class="error-message">{{ errorMessage }}</div>
  </div>
</template>

<script setup>
const props = defineProps({
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
  },
  errorMessage: {
    type: String,
    default: ""
  },
  error: {
    type: Boolean,
    default: false
  },
  isTooltipVisible: {
    type: Boolean,
    default: false
  },
  tooltipText: {
    type: String,
    default: ""
  },
  name: {
    type: String,
    default: ""
  }
})
</script>

<style lang="sass" scoped>
@import "../assets/main.sass"
.form-input
  background-color: $color-white
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
  &:hover
    border: 1px solid lighten($action-color, 20%)
  &:focus-within
    border: 1px solid $action-color
  &.error
    border: 1px solid red

.error-message
  color: $error-color
  font-size: 12px

.tooltip-bg
  position: relative
  display: inline-block
.tooltip
  position: absolute
  z-index: 3
  width: 160px
  background: grey
  text-align: right
  color: $color-white
  font-weight: 600
  font-size: 12px
  border-radius: 2px
  padding: 5px 10px
  word-wrap: break-word
  line-height: 150%
  margin-left: -15px
</style>