import http from 'utils/http'

const getTickerInfo = (pairs: string[]) => {
  return http.get(`/Ticker?pair=${pairs.join(',')}`, {})
}

export default {
  getTickerInfo
}
