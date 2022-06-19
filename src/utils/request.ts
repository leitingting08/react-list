import axios, { Method, AxiosResponse } from 'axios'
import { isUndefined, omitBy } from 'lodash-es'
/**
 * @param {*} method request method default get
 * @param {*} url request url
 * @param {*} params request params
 * @param {*} options other params
 */

const request = async (method: Method, url: string, params?: any, options?: Record<string, unknown>) => {
  // filter params undefined
  const data = params instanceof FormData || options?.noOmit ? params : omitBy(params, isUndefined)

  const result: AxiosResponse = await axios({
    method: method,
    url,
    ...(method === 'get' ? { params: data } : { data }),
    ...options
  })
  const res = result.data
  if (!res.success) {
    alert(res.desc)
  }
  return res
}

export default request
