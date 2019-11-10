import { Task } from "../../models/Task"
import { TaskActions } from "../actions/taskActions"

export interface TaskState {
    taskList: Task[],
    popup: {
        display: boolean,
        task?: Task
    }
}

const initialState: TaskState = {
    popup: {
        display: false
    },
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
        case TaskActions.TASK_DELETED: {
            const taskList = state.taskList.filter(t => t.id !== action.payload.id)
            return { ...state, taskList }
        }
        case TaskActions.TASK_CREATED:
        case TaskActions.TASK_EDITED:
            return { ...state, popup: { display: true, task: { ...action.payload } } }
        case TaskActions.CANCEL_EDIT_CREATE:
        case TaskActions.TASK_SAVED: {
           return { ...state, popup: { display: false } }
        }
        case TaskActions.FORM_TASK_TITLE_CHANGE: {
            const popup = { ...state.popup };
            popup.task = popup.task ? popup.task : new Task();
            popup.task.title = action.payload

            return { ...state, popup }
        }
        case TaskActions.FORM_TASK_DATE_CHANGE: {
            const popup = { ...state.popup };
            popup.task = popup.task ? popup.task : new Task();
            popup.task.date = action.payload

            return { ...state, popup }
        }
        case TaskActions.FORM_TASK_DESCRIPTION_CHANGE: {
            const popup = { ...state.popup };
            popup.task = popup.task ? popup.task : new Task();
            popup.task.description = action.payload

            return { ...state, popup }
        }
        default:
            return state
    }
}
