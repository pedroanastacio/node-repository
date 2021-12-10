import Express from 'express'
import bodyParser from 'body-parser'

import database from './database'
import { PORT } from './config'

import indexRoutes from './routes'
import taskRoutes from './routes/tasks'

const app = Express()
const port = PORT || 3000

app.set('json spaces', 2)
app.use(bodyParser.urlencoded({ extended: false }))
app.use(Express.json()) 

indexRoutes(app)
taskRoutes(app)

database.connect().then(() => {
	app.listen(port, () => console.log(`API is running on port ${port}!`))
})
