// Description: This file contains the environment variables for the application.

// Require the necessary environment variables
interface Env {
  PORT: string
  NODE_ENV: string
  DATABASE_URL: string
}

const {
  PORT = '3000',
  NODE_ENV = 'development',
  DATABASE_URL = './data/db.sqlite',
  ...env
} = process.env

// Add required keys here
const requiredKeys: (keyof Env)[] = []

const validatedEnv: Partial<Env> = {
  PORT,
  DATABASE_URL,
  NODE_ENV,
}

requiredKeys.forEach((key: keyof Env) => {
  if (!env[key]) throw new Error(`${key} is required`)
  validatedEnv[key] = env[key]
})

export default validatedEnv as Env
