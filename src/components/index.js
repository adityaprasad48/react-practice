import {combineReducers, createStore} from 'redux'
import { todos } from './counter/reducer';

export default createStore(combineReducers({
  todos
}))