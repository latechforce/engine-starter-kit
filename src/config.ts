import type { Config } from '@latechforce/engine'
import env from './env'
import { helloWorld } from './automations/helloWorld'

const config: Config = {
  name: 'App Starter',
  version: '1.0.0',
  automations: [helloWorld],
  server: {
    port: env.PORT,
  },
  monitors: [{ driver: 'Console' }],
  loggers: [],
}

switch (env.NODE_ENV) {
  case 'development':
    config.loggers?.push({ driver: 'Console', level: 'info' })
    break
  case 'production':
    config.loggers?.push({ driver: 'Console', level: 'http' })
    break
}

export default config
