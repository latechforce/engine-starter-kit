import { type Config } from '@latechforce/engine'
import App, { mocks } from '@latechforce/engine/bun'
import AppConfig from '../src/config'

export class MockedApp extends App {
  constructor() {
    super({
      integrations: mocks,
    })
  }
}

const { name, automations } = AppConfig

export const config: Config = {
  name,
  automations,
}

export const request = (url: string, data = {}, options: RequestInit = {}) =>
  fetch(url, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({ ...data }),
    ...options,
  }).then((res) => res.json())
