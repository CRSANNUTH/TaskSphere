const mongoose = require('mongoose');

const taskSchema = mongoose.Schema(
	{
		task: { type: String, required: true },
		status: {
			type: String,
			enum: ['backlog', 'todo', 'doing', 'done'],
			default: 'backlog',
		},
		priority: {
			type: String,
			enum: ['Low', 'Medium', 'High'],
			default: 'Medium', // Default priority
		},
		createdBy: {
			type: mongoose.Schema.Types.ObjectId,
			ref: 'User',
			required: true,
		},
	},
	{ timestamps: true } // ✅ Fix typo from "timestamp" to "timestamps"
);

const Task = mongoose.model('Task', taskSchema);
module.exports = Task;
