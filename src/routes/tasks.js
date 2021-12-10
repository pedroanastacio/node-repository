import * as TasksController from '../controllers/tasks'

const taskRoutes = (app) => {

	app.route('/tasks')
		.post((req, res) => {
			TasksController.create(req, res)
		})
		.get((req, res) => {
			TasksController.findAll(req, res)
		})

	app.route('/tasks/:id')
		.get((req, res) => {
			TasksController.find(req, res)
		})
		.put((req, res) => {
			TasksController.update(req, res)
		})
		.delete((req, res) => {
			TasksController.remove(req, res)
		})
}

export default taskRoutes