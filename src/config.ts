import type { Config } from "@latechforce/engine";
import env from "./env";
import { helloWorld } from "./automations/helloWorld";

const config: Config = {
  name: "App Template",
  automations: [helloWorld],
  server: {
    port: env.PORT,
  },
  monitors: [{ driver: "Console" }],
  loggers: [{ driver: "Console", level: "info" }],
};

export default config;
