<template>
  <div class="ticker-list">
    <div class="ticker-item ticker-item--title">
      <div class="ticker-item__content"> Pair </div>
      <div class="ticker-item__content"> Ask </div>
      <div class="ticker-item__content"> Bid </div>
    </div>
    <ticker-list-item
      v-for="ticker in tickersInfo"
      :key="ticker.pair"
      :ticker="ticker"
    />
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { ITickerInfo } from 'types/ticker.types'
import TickerListItem from './ticker-list-item.vue'

@Component({
  components: {
    TickerListItem
  }
})
export default class TickerList extends Vue {
  @Prop(Array)
  tickersInfo!: ITickerInfo[]
}
</script>