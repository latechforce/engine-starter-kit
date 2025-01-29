import type { Config } from '@latechforce/engine'
import env from './env'
import { helloWorld } from './automations/helloWorld'

const config: Config = {
  name: 'App Starter',
  automations: [helloWorld],
  server: {
    port: env.PORT,
  },
  monitors: [{ driver: 'Console' }],
  loggers: [],
}

switch (env.NODE_ENV) {
  case 'test':
    break
  case 'production':
    config.loggers?.push({ driver: 'Console', level: 'http' })
    break
  default:
    config.loggers?.push({ driver: 'Console', level: 'info' })
    break
}

export default config
