<template>
  <div class="ticker-component">
    <ticker-list
      :tickersInfo="tickersInfo"
    />
  </div>
</template>

<script lang="ts">
import TickerImpl from './ticker.impl'
import { Component } from 'vue-property-decorator'
import TickerList from './ui/ticker-list.vue'

@Component({
  components: {
    TickerList
  }
})
export default class TickerTemplate extends TickerImpl {}
</script>

<style lang="scss">
 @import './style.scss';
</style>