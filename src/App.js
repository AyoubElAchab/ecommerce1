
import './App.css';
import Home from './component/Home';
import Navbar from './component/Navbar';
import {Routes,Route} from "react-router-dom";
import Products from './component/Products';

function App() {
  return (
    <div>
      <Navbar/>
      <Routes >
        <Route path="/" element={<Home/>} />
        <Route path="/products" element={<Products/>} />
        

      </Routes>
    </div>
  ); 
}

export default App;

//d9i9a 26:13
