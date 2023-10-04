import './App.css';
import './Css/style.css';
import './Css/CartWidget.css';
import './Css/Navbar.css';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';
import ItemDetailContainer from './Components/ItemDetailContainer';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Nike from './Components/Nike';




function App() {
  return (
  
    <div>
      <BrowserRouter>
      <NavBar/>

      <Routes>
        <Route path='/' element={<ItemListContainer/>}></Route>
        <Route path='/All' element={<ItemListContainer/>}></Route>
        {/* <Route path='/category/:id' element={<Nike/>}></Route>
        <Route path='/category/:id' element={<Adidas/>}></Route>
        <Route path='/category/:id' element={<Puma/>}></Route> */}
        <Route path='/Item' element={<ItemDetailContainer />}></Route>
      </Routes>
      <ItemListContainer/>
      </BrowserRouter>
    </div>
  
  )
};

export default App;



