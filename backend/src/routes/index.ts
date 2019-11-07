import { IncomingMessage, ServerResponse } from 'http';
import { notFound } from './notFound';

export function routes(req: IncomingMessage, res: ServerResponse) {
	if (/^\/tasks\/{0,1}/gm.test(req.url)) {
		res.write('task'); //write a response
	} else {
		notFound(req, res);
	}
}
