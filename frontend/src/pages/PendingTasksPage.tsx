import React from 'react';
import { useSelector } from 'react-redux';
import { Task } from '../models/Task';
import BaseTasksPage from './BaseTasksPage';

const PendingTasksPage = () => {
	const tasks = useSelector((state: any) => state.task);
	
	return <BaseTasksPage title={'Todo Tasks'} tasks={tasks.taskList.filter((t: Task) => !t.completed)} />;
};

export default PendingTasksPage;
