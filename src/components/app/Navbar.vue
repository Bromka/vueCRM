<template>
  <nav class="navbar orange lighten-1">
    <div class="nav-wrapper">
      <div class="navbar-left">
        <a @click.prevent="$emit('click2')" href="#">
          <i class="material-icons black-text">dehaze</i>
        </a>
        <span class="black-text">{{ now | date("datetime") }}</span>
      </div>

      <ul class="right hide-on-small-and-down">
        <li>
          <a
            class="dropdown-trigger black-text"
            data-target="dropdown"
            href="#"
            ref="dropdown"
          >
              {{info.name}}
            <i class="material-icons right">arrow_drop_down</i>
          </a>

          <ul class="dropdown-content" id="dropdown">
            <li>
              <router-link class="black-text" to="/profile">
                <i class="material-icons">account_circle</i>Профиль
              </router-link>
            </li>
            <li class="divider" tabindex="-1"></li>
            <li>
              <a @click.prevent="logout" class="black-text" href="#">
                <i class="material-icons">assignment_return</i>Выйти
              </a>
            </li>
          </ul>
        </li>
      </ul>
    </div>
  </nav>
</template>
<script lang="ts">
import { Component, Vue } from "vue-property-decorator";

@Component({})
export default class App extends Vue {
  now = new Date();
  interval: any = null;
  dropdown: any;
  //methods
  async logout() {
    await this.$store.dispatch("logout");
    this.$router.push("/login?message=logout");
  }
  //hooks
  mounted() {
    const M = window.M;
    this.dropdown = M.Dropdown.init(this.$refs.dropdown, {
      constrainWidth: true,
      alignment: "bottom"
    });
    this.interval = setInterval(() => {
      this.now = new Date();
    }, 1000);



  }
  get
  info(){
      return this.$store.getters.info
  }
  beforeDestroy() {
    clearInterval(this.interval);
    if (this.dropdown && this.dropdown.destroy) {
      this.dropdown.destroy();
    }
  }
}
</script>
