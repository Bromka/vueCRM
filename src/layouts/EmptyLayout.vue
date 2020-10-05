<template>
  <div class="grey darken-1 empty-layout">

    <router-view></router-view>
  </div>
</template>
<script lang="ts">
  import {Component, Vue, Watch } from "vue-property-decorator";
  import messages from "@/utils/messages";
  @Component({})
  export default class EmptyLayout extends Vue{
    get error(){
      return this.$store.getters.error
    }
    @Watch('error')
    onChildChanged(val: any, oldVal: any) {
      // noinspection TypeScriptUnresolvedFunction
      this.$error(messages[val.code] || 'Что то пошло не так')
    }


  }
</script>
