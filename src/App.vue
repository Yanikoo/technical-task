<template>
  <div id="app">
    <HeaderMain />
    <AppMain />
  </div>
</template>

<script>
import AppMain from './components/AppMain.vue'
import HeaderMain from './components/HeaderMain.vue'

export default {
  name: 'App',
  components: {
    HeaderMain,
    AppMain
  }
}
</script>

<style lang="sass">
@import '@/assets/main.sass'
@import '@/assets/variables.sass'
</style>
