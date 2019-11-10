import { applyMiddleware, combineReducers, createStore } from 'redux'
import thunk from 'redux-thunk'
import { menuReducer } from './reducers/menuReducer'
import { taskReducer } from './reducers/taskReducer'

const reducers = combineReducers({
    task: taskReducer,
    menu: menuReducer
})

const store = createStore(reducers, applyMiddleware(thunk))

export default store
