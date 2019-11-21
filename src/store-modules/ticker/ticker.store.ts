import {
  ActionTree,
  GetterTree,
  Module,
  MutationTree
} from 'vuex'

import {
  ITickerState,
  IKrakenTickerResponse,
  ITickerInfo
} from 'types/ticker.types'

import api from './ticker.api'
import normallizeTickerName from 'utils/normallizeTickerName'

const APPLY_TICKERS_INFO = 'APPLY_TICKERS_INFO'
const SET_ERROR = 'SET_ERROR'

const namespaced: boolean = true

const state: ITickerState = {
  defaultTickers: [
    'ETH/USD',
    'LTC/XBT',
    'REP/ETH',
    'ADA/XBT',
    'ATOM/ETH'
  ],
  tickersInfo: [],
  error: []
}

const getters: GetterTree<ITickerState, null> = {
  tickersFormatted: (state: ITickerState) => state.defaultTickers,
  tickersRequest: (state: ITickerState) => state.defaultTickers.map(ticker => ticker.replace('/', '')),
  isError: (state: ITickerState) => state.error.length > 0,
  tickersInfo: (state: ITickerState) => state.tickersInfo
}

const actions: ActionTree<ITickerState, null> = {
  async getTickerInfo({ commit, getters }, pairs: string[]) {
    const response: IKrakenTickerResponse = (await api.getTickerInfo(pairs)).data
    const resPairs = response.result
    const error = response.error

    if (!error.length) {
      const keys: string[] = Object.keys(resPairs)
      const tickers: ITickerInfo[] = keys.map(tickerName => {
        const normallizedName = normallizeTickerName(getters.tickersFormatted, tickerName)
        const ticker: ITickerInfo = {
          pair: normallizedName,
          ask: resPairs[tickerName].a[0],
          bid: resPairs[tickerName].b[0]
        }
        return ticker
      })
      commit(APPLY_TICKERS_INFO, tickers)
    } else {
      commit(SET_ERROR, error)
    }
  }
}

const mutations: MutationTree<ITickerState> = {
  [APPLY_TICKERS_INFO](state, tickers) {
    state.tickersInfo = tickers
  },
  [SET_ERROR](state, error) {
    state.error = error
  }
}

const tickerStore: Module<ITickerState, null> = {
  actions,
  getters,
  mutations,
  namespaced,
  state
}

export default tickerStore
