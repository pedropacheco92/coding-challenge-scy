import React, { Fragment } from 'react'
import { Task } from '../models/Task'
import '../sass/TaskPopup.scss'
import '../sass/Buttons.scss'
import { useDispatch } from 'react-redux'
import { cancelEditCreateTask, saveTask, taskTitleChange, taskDateChange, taskDescriptionChange } from '../redux/actions/taskActions'

export interface TaskPopupProps {
	task: Task
}

const TaskPopup = ({ task }: TaskPopupProps) => {
	const dispatch = useDispatch()

	return <Fragment>
		<div className='task_popup_container'></div>
		<div className='task_popup_main_container'>
			<p>{task.id ? 'Edit Task' : 'Create Task'}</p>
			<input onChange={e => dispatch(taskTitleChange(e.target.value))} value={task.title} type='text' placeholder='title' />
			<input onChange={e => dispatch(taskDateChange(e.target.value))} value={task.date.toISOString().split('T')[0]} id="date" type="date" />
			<textarea onChange={e => dispatch(taskDescriptionChange(e.target.value))} value={task.description} rows={4} cols={50}></textarea>
			<div>
				<button onClick={() => dispatch(cancelEditCreateTask())} className='primary-button'>Cancel</button>
				<button onClick={() => dispatch(saveTask())} className='success-button'>Save</button>
			</div>
		</div>
	</Fragment>
};

export default TaskPopup
