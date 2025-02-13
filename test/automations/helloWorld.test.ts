import Tester, { describe, it, expect } from 'bun:test'
import { Helpers } from '@latechforce/engine/bun/test'
import config from '/config'

const helpers = new Helpers(Tester)

helpers.testWithMockedApp({}, ({ app, request }) => {
  describe('on POST', () => {
    it('should return a "Hello world!" message', async () => {
      // GIVEN
      const { url } = await app.start(config)

      // WHEN
      const response = await request.post(`${url}/api/automation/hello`, {
        name: 'world',
      })

      // THEN
      expect(response.message).toBe('Hello world!')
    })
  })
})
