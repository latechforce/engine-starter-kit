import type { Config } from '@latechforce/engine'
import pkg from '../package.json'
import env from '/env'
import { hello } from '/automations/hello'

const config: Config = {
  name: 'Engine Starter Kit',
  version: pkg.version,
  automations: [hello],
  monitors: [{ driver: 'Console' }],
  loggers: [],
}

switch (env.NODE_ENV) {
  case 'development':
    config.loggers?.push({ driver: 'Console', level: 'info' })
    config.database = {
      driver: 'SQLite',
      url: env.DATABASE_URL,
    }
    config.server = {
      port: env.PORT,
    }
    break
  case 'production':
    config.loggers?.push({ driver: 'Console', level: 'http' })
    config.database = {
      driver: 'PostgreSQL',
      url: env.DATABASE_URL,
    }
    config.server = {
      port: env.PORT,
    }
    break
}

export default config
