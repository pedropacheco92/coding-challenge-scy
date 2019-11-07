import http from 'http';
import { routes } from './routes'

//create a server object:
http.createServer(routes).listen(3000, function() {
	console.log('server start at port 3000');
});
