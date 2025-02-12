const { PORT = '3000', NODE_ENV = 'development', DATABASE_URL = './data/db.sqlite' } = process.env

const env = { PORT, NODE_ENV, DATABASE_URL }

export default env
