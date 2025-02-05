import type { Automation, CodeRunnerContext } from '@latechforce/engine'

export const hello: Automation = {
  name: 'hello',
  trigger: {
    service: 'Http',
    event: 'ApiCalled',
    path: 'hello',
    input: {
      type: 'object',
      properties: {
        name: {
          type: 'string',
        },
      },
      required: ['name'],
    },
    output: {
      message: '{{buildMessage.message}}',
    },
  },
  actions: [
    {
      name: 'buildMessage',
      service: 'Code',
      action: 'RunTypescript',
      input: {
        name: '{{trigger.body.name}}',
      },
      code: String(async function (context: CodeRunnerContext<{ name: string }>) {
        const { name } = context.inputData
        return { message: `Hello ${name}!` }
      }),
    },
  ],
}
