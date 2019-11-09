import React from 'react';
import TaskList from '../components/TaskList';
import { useSelector } from 'react-redux';
import Menu from '../components/Menu';

const PendingTasksPage = () => {
	const tasks = useSelector((state: any) => state.task);
	
	return (
		<div>
			<Menu />
            <p>Todo Tasks: </p>
			<TaskList tasks={tasks.taskList}/>
		</div>
	);
};

export default PendingTasksPage;
