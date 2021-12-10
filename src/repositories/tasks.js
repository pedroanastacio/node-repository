import TaskModel from '../models/tasks'

const findAll = async () => {
	const taskList = await TaskModel.find({})
	return taskList
}

const find = async (query) => {
	const task = await TaskModel.find(query)
	return task
}

const create = async (data) => {
	const newTask = new TaskModel(data)
	await newTask.save()
}

const update = async (id, data) => {
	const updatedTask = await TaskModel.findOneAndUpdate({ _id: id }, data, {
		new: true
	})
	return updatedTask
}

const remove = async (id) => {
	const deletedTask = await TaskModel.deleteOne({ _id: id })
	return deletedTask
}

export { 
	findAll, 
	find,
	create,
	update,
	remove
}