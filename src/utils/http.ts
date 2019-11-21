import axios, {
  AxiosError,
  AxiosInstance,
  AxiosPromise,
  AxiosResponse
} from 'axios'

const instance: AxiosInstance = axios.create({
  baseURL: 'https://api.kraken.com/0/public/',
  headers: {
    Accept: 'application/json, text/plain, */*',
    get: {
      'Content-Type': 'application/json'
    }
  }
})

instance.interceptors.response.use(
  (response: AxiosResponse) => response,
  (error: AxiosError) => Promise.reject(error.response)
)

export default class Http {
  public static get(url: string, data: any, headers?: any): AxiosPromise {
    return instance.get(url, { params: data, headers })
  }
}
