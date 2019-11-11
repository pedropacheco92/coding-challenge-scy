import React, { Fragment, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import Menu from '../components/Menu'
import TaskList from '../components/TaskList'
import TaskPopup from '../components/TaskPopup'
import { Task } from '../models/Task'
import { loadActions } from '../redux/actions/taskActions'
import '../sass/BaseTasksPage.scss'

export interface BaseTasksPageProps {
    title: string;
    tasks: Task[]
}

const BaseTasksPage = ({ title, tasks }: BaseTasksPageProps) => {
    const { popup } = useSelector((state: any) => state.task)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(loadActions())
    }, [popup, dispatch])

    return (<Fragment>
        <div className='page-container'>
            <Menu />
            <div className='list-container'>
                <p>{title}</p>
                <TaskList tasks={tasks} />
            </div>
        </div>
        { popup.display ? <TaskPopup task={popup.task} /> : null }
    </Fragment>
    )
}

export default BaseTasksPage
