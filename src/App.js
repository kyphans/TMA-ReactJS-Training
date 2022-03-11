import { Fragment } from 'react';
import {
  Link,
  Routes,
  Route,
} from "react-router-dom";
import './App.css';
import ShoppingCart from './Pages/ShoppingCart';
import TodoApp from './Pages/TodoApp';

function App() {
  return (
    <div className="App">
      <Fragment>
        <li>
          <Link to="/todo" >TODO APP REDUX</Link>
        </li>
        <li><Link to="/cart" >SHOPPING CART</Link></li>
      </Fragment>
      <Routes>
        <Route path="/todo" element={<TodoApp />} />
        <Route path="/cart" element={<ShoppingCart />} />
      </Routes>
    </div >
  );
}

export default App;
