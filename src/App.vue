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
  mounted() {
    console.log(this.$router);
    console.log(this.$route.meta);
  }

  get layout() {
    const str = this.$route.meta.layout
    const a = str.charAt(0).toUpperCase() + str.slice(1) + 'Layout';
    console.log(a);
    return a;
  }
}
</script>

<style lang="scss">
@import "~materialize-css/dist/css/materialize.min.css";
@import "assets/index.css";
</style>
