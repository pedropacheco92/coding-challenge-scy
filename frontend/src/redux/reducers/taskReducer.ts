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
        completed: true
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
    switch (action.type) {
        case TaskActions.LOAD_TASKS:
            break
        case TaskActions.TASK_COMPLETED: {
            const taskList = state.taskList.map(t => {
                if (t.id === action.payload.id) {
                    return { ...t, completed: !t.completed }
                }
                return t
            })
            return { ...state, taskList }
        }
        case TaskActions.TASK_CREATED: {
            const taskList = state.taskList;
            taskList.push(action.payload)
            return { ...state, taskList }
        }
        case TaskActions.TASK_DELETED: {
            const taskList = state.taskList.filter(t => t.id !== action.payload.id)
            return { ...state, taskList }
        }
        case TaskActions.TASK_EDITED:
            break;
        case TaskActions.TASK_SAVED:
            break;
        default:
            return state
    }
}
