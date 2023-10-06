<template>
  <div class="container">
    <HomeView />
  </div>
</template>

<script setup>
import HomeView from "./views/HomeView.vue"
</script>


<style lang="sass">
$action-color: #5cc41e
$background-color: #dcdcdc
$error-color: #cc0000
$placeholder-color: #949494


.container
  background-color: $background-color
  width: 100%
  padding: 10px 40px
  max-width: 850px
  margin: 0 auto
  @media (min-width: 900px)
    padding-top: 72px
.wrapper
  min-height: 100vh
  padding: 0 20px
  display: flex
  flex-direction: column
  flex: 1
  position: relative
  @media (min-width: 900px)
    flex-direction: row !important

h2
  text-transform: uppercase

@media (min-width: 1024px)
  .wrapper
    display: flex
    place-items: flex-start
    flex-wrap: wrap

</style>
