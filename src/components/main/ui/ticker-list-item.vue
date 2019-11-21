<template>
  <div class="ticker-item">
    <div class="ticker-item__content">
      {{ ticker.pair }}
    </div>
    <div class="ticker-item__content">
      {{ ticker.bid }}
    </div>
    <div class="ticker-item__content">
      {{ ticker.ask }}
    </div>
  </div>
</template>

<script lang="ts">
import Vue from 'vue'
import { Component, Prop } from 'vue-property-decorator'
import { ITickerInfo } from 'types/ticker.types'

@Component({})
export default class TickerListItem extends Vue {
  @Prop(Object)
  ticker!: ITickerInfo
}
</script>