import './App.css';
import { Link , Route , Routes } from 'react-router-dom';
import Home from './Home';
import Contact from './contact';
import Cart from './cart';
import About from './about';
import Api from './api';
import ToDo from './toDo';



function App() {
  return (
    <div className="App">
      <nav className='nav-bar'>
          <span><Link to="/todo">ToDo</Link></span>
          <span><Link to="/cart">Cart</Link></span>
          <span><Link to="/api">API</Link></span>
          <span><Link to="/home">Home</Link></span>
          <span><Link to="/about">About</Link></span>
          <span><Link to="/contact">Contact</Link></span>
      </nav>

      <Routes>
        <Route path='/home' Component={Home}></Route>
        <Route path='/about' Component={About}></Route>
        <Route path='/contact' Component={Contact}></Route>
        <Route path='/api' Component={Api}></Route>
        <Route path='/Cart' Component={Cart}></Route>
        <Route path='/todo' Component={ToDo}></Route>
      </Routes>

    </div>
  );
}

export default App;
