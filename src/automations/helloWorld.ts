import type { Automation } from "@latechforce/engine";

export const helloWorld: Automation = {
  name: "helloWorld",
  trigger: {
    service: "Http",
    event: "ApiCalled",
    path: "hello-world",
    output: {
      message: "{{runJavascriptCode.message}}",
    },
  },
  actions: [
    {
      service: "Code",
      action: "RunTypescript",
      name: "runJavascriptCode",
      code: String(async function () {
        return { message: `Hello world!` };
      }),
    },
  ],
};
