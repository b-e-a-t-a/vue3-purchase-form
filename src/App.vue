<template>
  <div class="container">
    <HomeView />
  </div>
</template>

<script setup>
import HomeView from "./views/HomeView.vue"
</script>


<style lang="sass">
@import "./assets/main.sass"

.container
  background-color: $background-color
  width: 100%
  padding: 10px 50px
  padding-left: calc(50px + $step-margin)
  max-width: 1024px
  margin: 0 auto

.wrapper
  min-height: 100vh
  padding: 0 20px
  display: flex
  flex-direction: column
  flex: 1
  position: relative
  @media (min-width: 900px)
    flex-direction: row !important

fieldset
  border: 0
  margin: 0
  padding: 0

h5, button
  text-transform: uppercase
  font-weight: 800

label, input, select
  line-height: 1.15
  width: 100%
  margin: 0

button, input
  overflow: visible
  margin: 0
input, select
  font-size: 100%
  border: none
  padding: 0
  font-weight: 600
  outline: none
label
  font-size: 80%
  color: rgba(0, 0, 0, 0.8)
  font-weight: 700
select
  text-transform: none
  margin-left: -4px
input
  box-sizing: border-box
  color: black
  border: none
  &::placeholder
    color: $placeholder-color
  &:hover, &:focus-visible, &:focus
    //color: $action-color
  &.error
    border: 1px solid $error-color
option
  border: none

@media (min-width: 1024px)
  .wrapper
    display: flex
    place-items: flex-start
    flex-wrap: wrap

@media screen and (max-width: 600px)
  .container
    padding-left: 50px
</style>
