import dotenv from 'dotenv'

dotenv.config()

module.exports = { 
	PORT: process.env.PORT,
	DATABASE_CONNECTION_STRING: process.env.DATABASE_CONNECTION_STRING
}