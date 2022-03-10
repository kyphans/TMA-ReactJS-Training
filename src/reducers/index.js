import { combineReducers } from "redux";
import todoReducer from "./TodoList";
import shoppingCart from "./ShoppingCart";

const rootReducer = combineReducers({
    todo: todoReducer,
    shoppingCart: shoppingCart,
})

export default rootReducer