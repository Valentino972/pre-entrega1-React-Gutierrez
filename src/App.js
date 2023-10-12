import './Css/style.css';
// import './Components/Navbar/Navbar';
import Navbar from './Components/Navbar/Navbar';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import ItemListContainer from './Components/Item/ItemListContainer';
import ItemDetailContainer from './Components/Item/ItemDetailContainer';




function App() {
  return (
    <div>
    <BrowserRouter>
      <Navbar/>
    <Routes>
      <Route path="/" element={<ItemListContainer />} />
      <Route path="/productos" element={<ItemListContainer />} />
      <Route path="/item/:id" element={<ItemDetailContainer />} />
    </Routes>
    </BrowserRouter>
    </div>
  )
};

export default App;



