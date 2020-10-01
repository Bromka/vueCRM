<template>
  <div class="app-main-layout">

    <Navbar />

    <Sidebar />

    <main class="app-content">
      <div class="app-page">
          <router-view></router-view>
      </div>
    </main>

    <div class="fixed-action-btn">
      <a class="btn-floating btn-large blue" href="#">
        <i class="large material-icons">add</i>
      </a>
    </div>
  </div>
</template>
<script lang="ts">
  import { Component, Vue } from "vue-property-decorator";
  import Navbar from '@/components/app/Navbar.vue';
  import Sidebar from '@/components/app/Sidebar.vue';

  @Component({
    components: {
      Navbar,
      Sidebar
    }
  })
  export default class App extends Vue {
  }
</script>
