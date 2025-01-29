const { PORT, NODE_ENV = 'development' } = process.env

if (!PORT) throw new Error('PORT is required')

const env = { PORT, NODE_ENV }

export default env
