import './App.css';
import Form from './components/Form'
import Home from './components/Home'
import {Routes, Route, Link} from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css'
import OneProduct from './components/OneProduct';
import Edit from './components/Edit'


function App() {
  return (
    <div className="App">
      <h1><Link to={"/"} >All Products</Link> | <Link to={"/add"} >Add Products</Link></h1>
    
    <Routes>
      <Route path = "/" element={<Home/>} />
      <Route path="/add" element={<Form/>} />
      <Route path="/oneProduct/:_id" element={<OneProduct/>} />
      <Route path="/oneProduct/edit/:_id" element={<Edit/>} />

    </Routes>
    </div>
  );
}

export default App;
