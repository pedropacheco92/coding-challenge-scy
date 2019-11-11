import React, { Fragment } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { Task } from '../models/Task'
import { createTask } from '../redux/actions/taskActions'
import '../sass/Buttons.scss'
import BaseTasksPage from './BaseTasksPage'

const PendingTasksPage = () => {
	const tasks = useSelector((state: any) => state.task)
	const dispatch = useDispatch()

	return <Fragment>
		<BaseTasksPage title={'Todo Tasks'} tasks={tasks.taskList.filter((t: Task) => !t.completed)} />
		<button onClick={() => dispatch(createTask())} className='primary-button round-button' style={{ position: 'fixed', bottom: '30px', right: '30px' }}>+</button>
	</Fragment>
};

export default PendingTasksPage
