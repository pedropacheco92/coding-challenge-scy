import React from 'react'
import { useSelector } from 'react-redux'
import { Task } from '../models/Task'
import BaseTasksPage from './BaseTasksPage'

const CompletedTasksPage = (props: any) => {
    const tasks = useSelector((state: any) => state.task)

	return <BaseTasksPage title={'Completed Tasks'} tasks={tasks.taskList.filter((t: Task) => t.completed)} />
}

export default CompletedTasksPage
