import { IncomingMessage, ServerResponse } from 'http';
import { TaskService } from '../services/TaskService';

const taskService = new TaskService();

export function tasks(req: IncomingMessage, res: ServerResponse) {
	switch (req.method) {
		case 'GET':
			taskService.read(req, res);
			break;
		case 'PUT':
		case 'PATCH':
			taskService.update(req, res);
			break;
		case 'POST':
			taskService.create(req, res);
			break;
		case 'DELETE':
			taskService.delete(req, res);
			break;
		default:
			taskService.read(req, res);
			break;
	}
}
