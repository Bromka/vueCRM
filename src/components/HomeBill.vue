<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>
        <p class="currency-line">
          <span>12.0 Р</span>
          {{rates}}
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Component, Vue, Prop } from "vue-property-decorator";

@Component({})
export default class Home extends Vue {
    @Prop() rates
}
</script>
