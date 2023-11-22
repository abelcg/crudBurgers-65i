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
import ProductDetails from './components/views/productDetails/ProductDetails';
import Login from './components/views/login/Login';
import Register from './components/views/register/Register';
import ProtectedRoute from './routes/ProtectedRoutes';

function App() {
  const [products, setProducts] = useState();
  const [loggedUser, setLoggedUser] = useState({});

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
      <Navigation loggedUser={loggedUser} setLoggedUser={setLoggedUser} />
      <main>
        <Routes>
          <Route exact path='/' element={<Home products={products} />} />
          <Route
            path='/*'
            element={
              <ProtectedRoute>
                <Routes>
                  <Route
                    exact
                    path='/product/table'
                    element={
                      <ProductsTable products={products} getAPI={getAPI} />
                    }
                  />
                  <Route
                    exact
                    path='/product/create'
                    element={<ProductCreate getAPI={getAPI} />}
                  />
                  <Route
                    exact
                    path='/product/edit/:id'
                    element={<ProductEdit getAPI={getAPI} />}
                  />
                </Routes>
              </ProtectedRoute>
            }
          ></Route>
          <Route
            exact
            path='/product/buy/:id'
            element={<ProductDetails URL={URL} />}
          />
          <Route
            exact
            path='/auth/login/'
            element={<Login setLoggedUser={setLoggedUser} />}
          />
          <Route
            exact
            path='/auth/register/'
            element={<Register setLoggedUser={setLoggedUser} />}
          />
          <Route exact path='*' element={<Error404 />} />
        </Routes>
      </main>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
