import mongoose from 'mongoose'
import { DATABASE_CONNECTION_STRING } from './config'

//mongoose.Promise = global.Promise

const config = {
	uri: DATABASE_CONNECTION_STRING,
	options: {
        useUnifiedTopology: true,
        useNewUrlParser: true,
	},
}

mongoose.connection.on('open', () => {
	console.log('Successfully connected to database!')
})

mongoose.connection.on('error', () => {
	console.log('Could not connect to database!')
})

export default {
	connect: () => mongoose.connect(config.uri, config.options)
}