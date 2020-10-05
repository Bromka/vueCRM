<template>
  <div class="app-main-layout">
    <Navbar @click2="isOpen = !isOpen" />

    <Sidebar :isOpen="isOpen" />

    <main class="app-content" :class="{full : !isOpen}">
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
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Navbar from "@/components/app/Navbar.vue";
import Sidebar from "@/components/app/Sidebar.vue";

@Component({
  components: {
    Navbar,
    Sidebar
  }
})
export default class App extends Vue {
  isOpen = true;
  async mounted(){
    await this.$store.dispatch('currency')
    if (!Object.keys(this.$store.getters.info).length){
      await this.$store.dispatch('fetchInfo')
    }
  }
}
</script>
