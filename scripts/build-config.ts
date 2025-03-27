import config from '/config'

Bun.write('./engine.config.json', JSON.stringify(config, null, 2))
