import { ThunkDispatch } from "redux-thunk";

export enum TaskActions {
    LOAD_TASKS = 'LOAD_TASKS',
    TASK_CREATED = 'TASK_CREATED',
    TASK_EDITED = 'TASK_EDITED',
    TASK_SAVED = 'TASK_SAVED',
    TASK_DELETED = 'TASK_DELETED',
    TASK_COMPLETED = 'TASK_COMPLETED'
}

export const loadActions = () => (dispatch: ThunkDispatch<any, any, any>, getState: any) => {
    dispatch({ type:  TaskActions.LOAD_TASKS, payload: ['lalala'] })   
}
