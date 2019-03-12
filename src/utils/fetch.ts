import fetch from 'node-fetch'
import { emitter } from './shared'


export const makeURL = (url): [string, string] => {
  const settings = emitter.getSettings()
  if (!settings || !settings.host) {
    console.warn('not found any settings.')
    console.warn('if you want use actions, please complete the setting first.')
    console.warn('e.g. cobot.lift({ host: "https://xxx.gitlab.com/", private: "token" })')
    return ['', '']
  }
  return [`${settings.host}/api/v4/${url}`, settings.private]
}

export const $base = (method: string, url, data = {}): Promise<any> => {
  const [uri, token] = makeURL(url)
  const body = method.toLowerCase() === 'get' ? {} : { body: JSON.stringify(data) }
  const options = Object.assign({}, {
    method: method,
    headers: {
      'Content-Type': 'application/json',
      'PRIVATE-TOKEN': token,
    },
  }, body)
  return fetch(uri, options)
    .then(res => {
      if (res.status === 204) return {}
      return res.json()
    })
}

export const $fetch = {
  get: (url: string) => $base('get', url),
  post: (url: string, data: any) => $base('post', url, data),
  put: (url: string, data: any) => $base('put', url, data),
  patch: (url: string, data: any) => $base('patch', url, data),
  delete: (url: string, data?: any) => $base('delete', url, data),
}


