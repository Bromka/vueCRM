<template>
  <div id="app">
    <component :is="layout">
      <router-view />
    </component>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import EmptyLayout from "./layouts/EmptyLayout.vue";
import MainLayout from "./layouts/MainLayout.vue";

@Component({
  components: {
    MainLayout,
    EmptyLayout
  }
})
export default class App extends Vue {

  get layout() {
    //layout define
    return (this.$route.meta.layout || 'empty') + '-layout'
  }
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
