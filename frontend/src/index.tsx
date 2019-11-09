import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import './index.scss';
import CompletedTasksPage from './pages/CompletedTasksPage';
import PendingTasksPage from './pages/PendingTasksPage';
import store from './redux';

ReactDOM.render(<Provider store={store}>
    <BrowserRouter>
        <Switch>
            <Route path='/' component={PendingTasksPage} />
            <Route path='/completed' component={CompletedTasksPage} />
        </Switch>
    </BrowserRouter>
</Provider>, document.getElementById('root'));
