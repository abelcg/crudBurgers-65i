import { useEffect, useState } from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './components/views/Home/Home';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';
import Error404 from './components/views/error404/Error404';
import ProductsTable from './components/views/productsTable/ProductsTable';
import ProductCreate from './components/views/productCreate/ProductCreate';
import ProductEdit from './components/views/productEdit/ProductEdit';
import axios from './config/axiosInit';

function App() {
  const [products, setProducts] = useState();

  //usamos la variable de entorno
  const URL = import.meta.env.VITE_API_HAMBURGUESERIA;

  useEffect(() => {
    //llamada a la API
    getAPI();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const getAPI = async () => {
    try {
      /* const res = await fetch(URL);
      const productApi = await res.json();
      setProducts(productApi); */

      const res = await axios.get(URL);
      //console.log(res.data);
      setProducts(res.data);
    } catch {
      console.log('hubo un error en el server');
    }
  };

  return (
    <BrowserRouter>
      <Navigation />
      <main>
        <Routes>
          <Route exact path='/' element={<Home products={products} />} />
          <Route
            exact
            path='/product/table'
            element={<ProductsTable products={products} getAPI={getAPI} />}
          />
          <Route
            exact
            path='/product/create'
            element={<ProductCreate getAPI={getAPI} />}
          />
          <Route exact path='/product/edit/:id' element={<ProductEdit />} />
          <Route exact path='*' element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
