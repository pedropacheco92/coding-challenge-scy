import { IncomingMessage, ServerResponse } from 'http';
import { notFound } from './notFound';
import { tasks } from './task';

export function routes(req: IncomingMessage, res: ServerResponse) {
	if (/^\/tasks\/{0,1}/gm.test(req.url)) {
		tasks(req, res)
	} else {
		notFound(req, res);
	}
}
