import Vue from 'vue'
import Vuex, { StoreOptions } from 'vuex'

import TICKER_STORE from 'store-modules/ticker/ticker.store'

Vue.use(Vuex)

const store: StoreOptions<any> = {
  modules: {
    TICKER_STORE
  },
  plugins: []
}

export default new Vuex.Store<any>(store)
