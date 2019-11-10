import { ThunkDispatch } from "redux-thunk";
import { Task } from "../../models/Task";

export enum TaskActions {
    LOAD_TASKS = 'LOAD_TASKS',
    TASK_CREATED = 'TASK_CREATED',
    TASK_EDITED = 'TASK_EDITED',
    TASK_SAVED = 'TASK_SAVED',
    TASK_DELETED = 'TASK_DELETED',
    TASK_COMPLETED = 'TASK_COMPLETED'
}

export const loadActions = () => (dispatch: ThunkDispatch<any, any, any>, getState: any) => {
    dispatch({ type: TaskActions.LOAD_TASKS, payload: ['lalala'] })
}

export const completeTask = (task: Task) => {
    return { type: TaskActions.TASK_COMPLETED, payload: task }
}

export const deleteTask = (task: Task) => {
    return { type: TaskActions.TASK_DELETED, payload: task }
}
