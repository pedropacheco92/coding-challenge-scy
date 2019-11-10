import React from 'react';
import { useDispatch } from 'react-redux';
import { Task } from '../models/Task';
import { completeTask, deleteTask } from '../redux/actions/taskActions';
import '../sass/TaskItem.scss';

export interface TaskItemProps {
	task: Task
}

const TaskItem = ({ task }: TaskItemProps) => {
	const classNameItem = task.completed ? 'task_item task_item_check-completed' : 'task_item'
	const dispatch = useDispatch()

	return <div className={classNameItem}>
		<div onClick={() => dispatch(completeTask(task))} className='task_item_check'></div>
		<div>{task.title}</div>
		<div className='task_item_edit'></div>
		<div onClick={() => dispatch(deleteTask(task))} className='task_item_delete'></div>
	</div>;
};

export default TaskItem;
