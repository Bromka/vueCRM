<template>
  <div class="col s12 m6 l4">
    <div class="card light-blue bill-card">
      <div class="card-content white-text">
        <span class="card-title">Счет в валюте</span>
        <p class="currency-line" v-for="(item, index) in currencyLinesArray.values" :key="index">
          <span>{{floatData(item.value)}} {{item.name}}</span>
        </p>
      </div>
    </div>
  </div>
</template>
<script>
import { Component, Vue, Prop } from "vue-property-decorator";
import {getCurrencyArray} from '@/utils/functions';

@Component({})
export default class Home extends Vue {
    @Prop() rates
    bill = 0;
    get currencyLinesArray(){
      return getCurrencyArray(this.rates)
    }

    mounted(){
      this.bill = this.$store.getters.info.bill
    }
    floatData(value){
      return Math.round(this.bill/value*100)/100
    }

}
</script>
