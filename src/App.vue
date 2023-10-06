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

h4, button
  text-transform: uppercase
  font-weight: 800

input
  width: 100%

@media (min-width: 1024px)
  .wrapper
    display: flex
    place-items: flex-start
    flex-wrap: wrap

</style>
