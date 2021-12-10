import Mongoose from 'mongoose'
const Schema = Mongoose.Schema

const schema = new Schema({
	title: {
		type: String,
		required: true,
		trim: true
	},
	description: {
		type: String,
	}
}, {
	timestamps: { createdAt: true, updatedAt: true }
})

const TaskModel = Mongoose.model('Tasks', schema)

export default TaskModel

