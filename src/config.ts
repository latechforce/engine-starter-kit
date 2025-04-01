import type { Config } from '@latechforce/engine'
import pkg from '../package.json'
import { hello } from '/automations/hello'

const config: Config = {
  name: pkg.name,
  version: pkg.version,
  automations: [hello],
  monitors: [{ driver: 'Console' }],
  loggers: [],
}

const { NODE_ENV = 'development' } = process.env

switch (NODE_ENV) {
  case 'development':
    config.loggers?.push({ driver: 'Console', level: 'info' })
    config.database = {
      driver: 'SQLite',
      url: '{{ env.DATABASE_URL "./data/db.sqlite" }}',
    }
    config.server = {
      port: '{{ env.PORT "3000" }}',
    }
    break
  case 'production':
    config.loggers?.push({ driver: 'Console', level: 'http' })
    config.database = {
      driver: 'PostgreSQL',
      url: '{{ env.DATABASE_URL }}',
    }
    config.server = {
      port: '{{ env.PORT }}',
    }
    config.theme = {
      type: 'tailwindcss',
    }
    break
}

export default config
