import React from 'react';
import { Task } from '../models/Task';
import './TaskItem.scss';

export interface TaskItemProps {
	task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
	return <div className='task_item'>
		<div className='task_item_check'></div>
		<div>{task.title}</div>
		<div className='task_item_edit'></div>
		<div className='task_item_delete'></div>
	</div>;
};

export default TaskItem;
