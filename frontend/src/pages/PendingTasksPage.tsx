import React from 'react';
import TaskList from '../components/TaskList';
import { useSelector } from 'react-redux';

const PendingTasksPage: React.FC = () => {
	const tasks = useSelector((state: any) => state.task);

	return (
		<div>
            <p>Todo Tasks: </p>
			<TaskList tasks={tasks.taskList}/>
		</div>
	);
};

export default PendingTasksPage;
