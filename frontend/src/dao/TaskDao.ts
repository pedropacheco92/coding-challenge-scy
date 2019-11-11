import { Task } from "../models/Task"

export class TaskDao {

    private url = 'http://localhost:4000/tasks'

    public async get() {
        return await fetch(this.url).then(res => res.json())
    }

    public async update(task: Task) {
        return await fetch(`${this.url}/${task._id}`, { method: 'PUT',  body: JSON.stringify(task)}).then(res => res.json())
    }

    public async create(task: Task) {
        return await fetch(this.url, { method: 'POST', body: JSON.stringify(task) }).then(res => res.json())
    }

    public async delete(task: Task) {
        return await fetch(`${this.url}/${task._id}`, { method: 'DELETE' }).then(res => res.json())
    }

}