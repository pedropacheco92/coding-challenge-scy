import http from 'http';
import { routes } from './routes'
import mongoose from 'mongoose'

// Mongo Connect
mongoose.connect('mongodb+srv://taskUser:EsshkbE7Uxu7KySz@mongo-cluster-01-zymjf.mongodb.net/TaskManager?retryWrites=true&w=majority',
	{ useNewUrlParser: true, useUnifiedTopology: true })
	.then(() => console.log('Mongo Connected'));

//create a server object:
const server = http.createServer(routes).listen(4000, function () {
	console.log('server start at port 4000');
});
