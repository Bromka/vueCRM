<template>

    <div>
        <div class="page-title">
            <h3>Счет</h3>
            <button class="btn waves-effect waves-light btn-small">
                <i class="material-icons">refresh</i>
            </button>
        </div>

        <div class="row">
            <div class="col s12 m6 l4">
                <div class="card light-blue bill-card">
                    <div class="card-content white-text">
                        <span class="card-title">Счет в валюте</span>

                        <p class="currency-line">


                            <span>12.0 Р</span>
                        </p>
                    </div>
                </div>
            </div>

            <div class="col s12 m6 l8">
                <div class="card orange darken-3 bill-card">
                    <div class="card-content white-text">
                        <div class="card-header">
                            <span class="card-title">Курс валют</span>
                        </div>
                        <table>
                            <thead>
                            <tr>
                                <th>Валюта</th>
                                <th>Курс</th>
                                <th>Дата</th>
                            </tr>
                            </thead>

                            <tbody>
                            {{onChildChanged()}}
                            <tr v-for="(el, i) in onChildChanged()" :key="i">

                                                                <td>{{el.name}}</td>
                                                                <td>{{el.value}}</td>
                                                                <td>{{el.day | date('Date')}}</td>
                            </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    </div>

</template>

<script>
  import {Component, Vue, Watch} from 'vue-property-decorator';
  import {getCurrencyArray} from '@/utils/functions';

  @Component({})
  export default class Home extends Vue {

    get currency() {
      return this.$store.getters.currency
    }

    @Watch('currency')
    onChildChanged() {
      if (!Object.keys(this.currency).length) {
        return getCurrencyArray(this.currency);
      }

    }

  }
</script>
