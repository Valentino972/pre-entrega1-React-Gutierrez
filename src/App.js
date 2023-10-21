import './Css/style.css';
// import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/Item/ItemListContainer';
import ItemDetailContainer from './Components/Item/ItemDetailContainer';
import Contacto from './Components/Contacto/Contacto';




function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/productos/:categoria" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
      <Route path="/contacto" element={<Contacto />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
};

export default App;



