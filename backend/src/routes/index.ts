import { IncomingMessage, ServerResponse } from 'http';
import { notFound } from './notFound';
import { tasks } from './task';

export function routes(req: IncomingMessage, res: ServerResponse) {
	// CORS
	res.setHeader('Access-Control-Allow-Origin', '*');
	res.setHeader('Access-Control-Request-Method', '*');
	res.setHeader('Access-Control-Allow-Methods', 'OPTIONS, GET, PUT, POST, DELETE, PATCH');
	res.setHeader('Access-Control-Allow-Headers', '*');
	if ( req.method === 'OPTIONS' ) {
		res.writeHead(200);
		res.end();
		return;
	}

	if (/^\/tasks\/{0,1}/gm.test(req.url)) {
		tasks(req, res)
	} else {
		notFound(req, res);
	}
}
