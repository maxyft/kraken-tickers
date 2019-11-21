import Vue from 'vue'
import { Action, Getter } from 'vuex-class'
import { Component } from 'vue-property-decorator'

import {
  ITickerInfo
} from 'types/ticker.types'

enum Stores {
  ticker = 'TICKER_STORE'
}

@Component({})
export default class TickerImplementation extends Vue {
  @Getter(`${Stores.ticker}/tickersFormatted`)
  tickersFormatted: string[]
  @Getter(`${Stores.ticker}/tickersRequest`)
  tickersRequest: string[]
  @Getter(`${Stores.ticker}/tickersInfo`)
  tickersInfo: ITickerInfo[]
  @Getter(`${Stores.ticker}/isError`)
  isError: boolean

  @Action(`${Stores.ticker}/getTickerInfo`)
  getTickerInfo: (pairs: string[]) => Promise<void>

  timeout(time: number) {
    return new Promise(resolve => {
      setTimeout(() => resolve(), time)
    })
  }

  created() {
    this.runTickersPolling()
  }

  async runTickersPolling() {
    await this.getTickerInfo(this.tickersRequest)

    if (this.isError) {
      return
    }

    await this.timeout(15000)
    this.runTickersPolling()
  }
}