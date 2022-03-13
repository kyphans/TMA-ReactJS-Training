import 'antd/dist/antd.min.css';
import { Fragment } from 'react';
import {
  Link, Route, Routes
} from "react-router-dom";
import './App.css';
import EnhancedTodoList from './Pages/EnhancedTodoList';
import ShoppingCart from './Pages/ShoppingCart';
import TodoApp from './Pages/TodoApp';

function App() {
  return (
    <div className="App">
      <Fragment>
        <li>
          <Link to="/todo" >TODO APP REDUX</Link>
        </li>
        <li>
          <Link to="/todo-list" >TODO</Link>
        </li>
        <li>
          <Link to="/cart" >SHOPPING CART</Link>
        </li>
      </Fragment>
      <Routes>
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/todo-list" element={<EnhancedTodoList />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div >
  );
}

export default App;
