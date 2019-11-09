import { Task } from "../../models/Task"
import { TaskActions } from "../actions/taskActions"

export interface TaskState {
    taskList: Task[]
}

const initialState: TaskState = {
    taskList: [{
        id: '1',
        title: 'Task 1',
        description: 'Task 1',
        date: new Date(),
        completed: false
    },
    {
        id: '2',
        title: 'Task 2',
        description: 'Task 2',
        date: new Date(),
        completed: false
    },
    {
        id: '3',
        title: 'Task 3',
        description: 'Task 3',
        date: new Date(),
        completed: false
    }]
}

export function taskReducer(state = initialState, action: any) {
    console.log(action)
    switch (action) {
        case TaskActions.LOAD_TASKS:            
            break
        case TaskActions.TASK_COMPLETED:            
            break
        case TaskActions.TASK_CREATED:            
            break
        case TaskActions.TASK_DELETED:            
            break
        case TaskActions.TASK_EDITED:            
            break;
        case TaskActions.TASK_SAVED:            
            break;  
        default:
            return state
    }
}
