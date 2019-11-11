import { Task } from "../models/Task";
import { TaskModel } from '../schemas/TaskSchema';

export class TaskDao {

    public async get() {
        return await TaskModel.find();
    }

    public async getById(id: string) {
        return await TaskModel.findById(id);
    }

    public async create(task: Task) {
        return await new TaskModel(task).save()
    }

    public async update(task: Task) {
        return await TaskModel.updateOne({ _id: task._id }, task)
    }

    public async delete(id: string) {
        return await TaskModel.deleteOne({ _id: id })
    }

}