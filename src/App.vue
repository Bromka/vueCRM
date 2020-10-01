<template>
  <div id="app">
    <router-view />
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({
  components: {
  }
})
export default class App extends Vue {
    mounted () {
        console.log (this.$router)
    }
}
</script>

<style lang="scss">


</style>
