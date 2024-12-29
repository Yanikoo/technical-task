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
    AppMain,
  },
}
</script>

<style lang="sass">
@forward './assets/main.sass'
@forward './assets/variables.sass'
</style>
