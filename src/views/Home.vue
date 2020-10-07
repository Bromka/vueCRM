<template>
  <div>
    <div class="page-title">
      <h3>Счет</h3>
      <button class="btn waves-effect waves-light btn-small">
        <i class="material-icons">refresh</i>
      </button>
    </div>
    <Loader v-if="loading"/>
    <div class="row" v-else>
      <HomeBill :rates="currency"/>
      <HomeCurrency />
    </div>
  </div>
</template>

<script>
import { Component, Vue, Watch } from "vue-property-decorator";
import { getCurrencyArray } from "@/utils/functions";
import HomeCurrency from "@/components/HomeCurrency";
import HomeBill from "@/components/HomeBill";

@Component({
  components: {
    HomeCurrency,
    HomeBill
  }
})
export default class Home extends Vue {
  loading = true;
  currency = null;

  async mounted(){
    this.currency = await this.$store.dispatch('fetchCurrency')
    this.loading = false;
  }





}
</script>
