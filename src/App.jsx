import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./components/NavBar/NavBar";
import ItemListContainer from "./components/ItemListContainer/ItemListContainer";
import ItemDetailContainer from "./components/ItemDetailContainer/ItemDetailContainer";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import Cart from "./components/Cart/Cart";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="App border border-3 border-primary">
          <NavBar />
          <Routes>
            {/* esto es la vinculación ... */}
            <Route exact path="/" element={<ItemListContainer />} />
            <Route
              exact
              path="/categoria/:idCategoria"
              element={<ItemListContainer />}
            />
            <Route
              exact
              path="/detalle/:idProducto"
              element={<ItemDetailContainer />}
            />
            <Route exact path="/cart" element={<Cart />} />
          </Routes>
        </div>
      </BrowserRouter>

      {/*  <ItemListContainer greeting="Hola soy una prop greeting" /> */}
      {/*  <ItemDetailContainer /> */}
    </>

    // <div className="App">
    //   <NavBar />
    //   {/*<ItemListContainer greetings="soy una props" />*/}
    //   <ItemDetailContainer />
    // </div>
  );
}

export default App;
