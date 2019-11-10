import React from 'react'
import Menu from '../components/Menu'
import TaskList from '../components/TaskList'
import { Task } from '../models/Task'
import '../sass/BaseTasksPage.scss'

export interface BaseTasksPageProps {
    title: string;
    tasks: Task[]
}

const BaseTasksPage = ({ title, tasks }: BaseTasksPageProps) => {
	return (
		<div className='page-container'>
			<Menu />
            <div className='list-container'>
                <p>{title}</p>
                <TaskList tasks={tasks}/>
            </div>
		</div>
	)
}

export default BaseTasksPage
