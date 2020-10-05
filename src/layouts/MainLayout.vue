<template>
  <div class="app-main-layout">
    <Navbar @click2="isOpen = !isOpen" />

    <Sidebar :isOpen="isOpen" />

    <main :class="{ full: !isOpen }" class="app-content">
      <div class="app-page">
        <router-view></router-view>
      </div>
    </main>

    <div class="fixed-action-btn">
      <router-link class="btn-floating btn-large blue" to="/record">
        <i class="large material-icons">add</i>
      </router-link>
    </div>
  </div>
  <!--  <MoonLoader class="spinner" v-else />-->
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/app/Navbar.vue";
import Sidebar from "@/components/app/Sidebar.vue";
// import MoonLoader from "vue-spinner/src/MoonLoader.vue";

@Component({
  components: {
    Navbar,
    Sidebar
    // MoonLoader
  }
})
export default class App extends Vue {
  isOpen = true;

  async mounted() {
    await this.$store.dispatch("currency");
    if (!Object.keys(this.$store.getters.info).length) {
      try {
        const a = await this.$store.dispatch("fetchInfo");
      } catch (e) {
        await this.$router.push("/login");
      }
    } else {
      await this.$router.push("/login");
    }
  }
  async updated() {
    if (!Object.keys(this.$store.getters.info).length) {
      await this.$router.push("/login");
    }
  }
}
</script>
<style scoped>
.spinner {
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
}
</style>
