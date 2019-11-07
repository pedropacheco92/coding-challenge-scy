import { IncomingMessage, ServerResponse } from 'http';

export function notFound(req: IncomingMessage, res: ServerResponse) {
	res.writeHead(404);
	res.write('Not Found!');
	res.end();
}
