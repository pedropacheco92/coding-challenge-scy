import { IncomingMessage, ServerResponse } from 'http';
import { TaskDao } from '../daos/TaskDao';
import { Task } from '../models/Task';
import { getId, send, parseBody } from '../helpers/restHelper';
import { notFound } from '../routes/notFound';

export class TaskService {

    private dao: TaskDao;

    constructor() {
        this.dao = new TaskDao();
    }

    async read(req: IncomingMessage, res: ServerResponse) {
        const id = getId(req.url, '/tasks');
        if (id) {
            try {
                send(res, await this.dao.getById(id))
            } catch (error) {
                notFound(req, res)
            }
        } else {
            send(res, await this.dao.get())            
        }
    }

    async create(req: IncomingMessage, res: ServerResponse) {
        const body: Task = await parseBody(req)
        const result = await this.dao.create(body);
        send(res, result)
    }

    async update(req: IncomingMessage, res: ServerResponse) {        
        const body: Task = await parseBody(req)
        const id = getId(req.url, '/tasks');   
        body._id = id
        const { ok } = await this.dao.update(body);
        send(res, { ok })    
    }

    async delete(req: IncomingMessage, res: ServerResponse) {
        const id = getId(req.url, '/tasks');
        if (id) {
            try {
                send(res, await this.dao.delete(id))
            } catch (error) {
                notFound(req, res)
            }
        } else {
            notFound(req, res)            
        }
    }

}