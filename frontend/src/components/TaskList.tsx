import React from 'react';
import { Task } from '../models/Task';
import TaskItem from './TaskItem';
import '../sass/TaskList.scss';

export interface TaskListProps {
    tasks: Task[]
}

const TaskList = ({ tasks }: TaskListProps) => {
    return <div className='task_list'>
        {tasks.map((task: Task) => <TaskItem key={task.id} task={task} />)}
    </div>;
};

export default TaskList;
