import Tester, { describe, it, expect } from 'bun:test'
import { Helpers } from '@latechforce/engine/bun/test'
import config from '@config'

const helpers = new Helpers(Tester)

helpers.testWithMockedApp({}, ({ app, request }) => {
  describe('call API', () => {
    it('should return a "Hello World!" message', async () => {
      // GIVEN
      const { url } = await app.start(config)

      // WHEN
      const response = await request.post(`${url}/api/automation/hello-world`)

      // THEN
      expect(response.message).toBe('Hello world!')
    })
  })
})
