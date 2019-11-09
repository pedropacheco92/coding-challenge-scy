import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { taskReducer } from './reducers/taskReducer'

const reducers = combineReducers({
    task: taskReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
