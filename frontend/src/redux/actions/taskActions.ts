import { ThunkDispatch } from "redux-thunk";
import { Task } from "../../models/Task";

export enum TaskActions {
    LOAD_TASKS = 'LOAD_TASKS',
    TASK_CREATED = 'TASK_CREATED',
    TASK_EDITED = 'TASK_EDITED',
    TASK_SAVED = 'TASK_SAVED',
    TASK_DELETED = 'TASK_DELETED',
    TASK_COMPLETED = 'TASK_COMPLETED',
    CANCEL_EDIT_CREATE = 'CANCEL_EDIT_CREATE',
    FORM_TASK_TITLE_CHANGE = 'FORM_TASK_TITLE_CHANGE',
    FORM_TASK_DATE_CHANGE = 'FORM_TASK_DATE_CHANGE',
    FORM_TASK_DESCRIPTION_CHANGE = 'FORM_TASK_DESCRIPTION_CHANGE'
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

export const editTask = (task: Task) => {
    return { type: TaskActions.TASK_EDITED, payload: task }
}

export const createTask = () => {
    return { type: TaskActions.TASK_CREATED }
}

export const saveTask = () => {
    return { type: TaskActions.TASK_SAVED }
}

export const cancelEditCreateTask = () => {
    return { type: TaskActions.CANCEL_EDIT_CREATE }
}

export const taskTitleChange = (payload: string) => {
    return { type: TaskActions.FORM_TASK_TITLE_CHANGE, payload }
}

export const taskDateChange = (payload: string) => {
    return { type: TaskActions.FORM_TASK_DATE_CHANGE, payload: new Date(payload) }
}

export const taskDescriptionChange = (payload: string) => {
    return { type: TaskActions.FORM_TASK_DESCRIPTION_CHANGE, payload }
}
