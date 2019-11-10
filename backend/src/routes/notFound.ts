import { IncomingMessage, ServerResponse } from 'http';
import { send } from '../helpers/restHelper';

export function notFound(_: IncomingMessage, res: ServerResponse) {
	send(res, 'Not Found!', 404)
}
