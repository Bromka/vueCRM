<template>
  <ul class="sidenav app-sidenav" :class="{open: isOpen}">
    <router-link tag="li" :to="item.linkTo" active-class="active" v-for="(item, index) in links" :key="index" :exact="item.exact">
      <a href="#" class="waves-effect waves-orange pointer">{{item.title}}</a>
    </router-link>
  </ul>
</template>
<script lang="ts">
  import {Component, Vue, Prop} from "vue-property-decorator";

interface Link {
  title: string;
  linkTo: string;
  exact?: boolean
}

@Component
export default class App extends Vue {

  @Prop() isOpen: boolean | undefined;

  links: Array<Link> = [
    {
      title: 'Счет',
      linkTo: '/',
      exact: true
    },
    {
      title: 'История',
      linkTo: '/history'
    },
    {
      title: 'Планирование',
      linkTo: '/planning'
    },
    {
      title: 'Новая запись',
      linkTo: '/record'
    },
    {
      title: 'Категории',
      linkTo: '/categories'
    }
  ];
}
</script>
