import * as TasksRepository from '../repositories/tasks'

const findAll = async (req, res) => {
	try {
		const tasks = await TasksRepository.findAll()
		res.status(200).send({ tasks })
        
	} catch (e) {
		res.status(500).send({ message: 'Could not find the tasks!' })
	}
}

const find = async (req, res) => {
	const { id } = req.params
	const query = {}

	if (id)
		query._id = id
	else
		return res.status(400).send({ message: 'Task ID is missing!' })
    
	try {
		const task = await TasksRepository.find(query)
		res.status(200).send({ task })

	} catch (e) {
		res.status(404).send({ message: 'Could not find the task!' })
	}
}

const create = async (req, res) => {
	try {
		await TasksRepository.create({
			title: req.body.title,
			description: req.body.description
		})
		res.status(201).send({ message: 'Created task!' })

	} catch (e) {
		res.send()
	}    
}

const update = async (req, res) => {
	const { id } = req.params

	if (!id)
		return res.status(400).send({ message: 'Task ID is missing!' })
    
	try {
		const updatedTask = await TasksRepository.update(id, {
			title: req.body.title,
			description: req.body.description
		})

		if(updatedTask)
			return res.status(200).send({ message: 'Updated task!' })
        
		res.setatus(409).send({ message: 'Could not update the task!' })

	} catch (e) {
		res.status(404).send({ message: 'Could not find the task!' })
	}
}

const remove = async (req, res) => {
	const { id } = req.params

	if (!id)
		return res.status(400).send({ message: 'Task ID is missing!' })
    
	try {
		const removedTask = await TasksRepository.remove(id)

		if(removedTask.deletedCount)
			return res.status(200).send({ message: 'Deleted task!' })
        
		res.setatus(409).send({ message: 'Could not delete the task!' })

	} catch (e) {
		res.status(404).send({ message: 'Could not find the task!' })
	}
}

export {
	findAll,
	find,
	create,
	update,
	remove 
}