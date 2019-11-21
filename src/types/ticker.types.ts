interface ITickerState {
  defaultTickers: string[]
  tickersInfo: ITickerInfo[]
  error: string[]
}

interface ITickerInfo {
  pair: string
  ask: string
  bid: string
}

interface ITickerPair {
  a: string[] // [<price>, <whole lot volume>, <lot volume>]
  b: string[] // [<price>, <whole lot volume>, <lot volume>]
  c: string[]
  h: string[]
  l: string[]
  o: string
  p: string[]
  t: string[]
  v: string[]
}

interface IKrakenTickerResponse {
  error: string[]
  result: {
    [pair: string]: ITickerPair
  }
}

export {
  ITickerState,
  IKrakenTickerResponse,
  ITickerPair,
  ITickerInfo
}