import './App.css';
import './Css/CartWidget.css';
import './Css/Navbar.css';
import CartWidget from './Components/CartWidget';
import NavBar from './Components/Navbar';
import ItemListContainer from './Components/ItemListContainer';

function App() {
  return (
    <body>
      <div className="App">
        <NavBar />
        <CartWidget />
      </div>
    </body>
  );
}

export default App;
