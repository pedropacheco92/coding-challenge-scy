import React from 'react';
import { Task } from '../models/Task';
import '../sass/TaskPopup.scss';

export interface TaskPopupProps {
	task: Task
}

const TaskPopup = ({ task }: TaskPopupProps) => {
	return <div className='task_popup_container'>
		<div className='task_item_check'></div>
		<div>{task.title}</div>
	</div>;
};

export default TaskPopup;
