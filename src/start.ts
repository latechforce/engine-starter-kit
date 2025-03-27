import App from '@latechforce/engine/bun'
import config from '/config'

const { GH_ENGINE_CONFIG_URL, GH_TOKEN } = process.env

const app = new App()

if (GH_ENGINE_CONFIG_URL) {
  const response = await fetch(GH_ENGINE_CONFIG_URL, {
    headers: {
      Authorization: `Bearer ${GH_TOKEN}`,
      Accept: 'application/vnd.github.v3.raw',
    },
  })
  if (!response.ok) {
    console.log(`Failed to fetch config from ${GH_ENGINE_CONFIG_URL}, using local config`)
    await app.start(config)
  } else {
    console.log(`Using config from GitHub at ${GH_ENGINE_CONFIG_URL}`)
    const githubConfig = await response.json()
    await app.start(githubConfig)
  }
} else {
  await app.start(config)
}
