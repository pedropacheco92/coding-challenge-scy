import { Schema, model } from 'mongoose';

const TaskSchema = new Schema({
	title: String,
	date: { type: Date, default: Date.now },
	description: String,
	completed: { type: Boolean, default: false },
});

export const TaskModel = model('task', TaskSchema, 'Tasks');
