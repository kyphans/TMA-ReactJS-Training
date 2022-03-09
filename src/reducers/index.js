import { combineReducers } from "redux";
import todoReducer from "./TodoList";

const rootReducer = combineReducers({
    todo: todoReducer,
})

export default rootReducer