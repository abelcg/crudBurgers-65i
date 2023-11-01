import { useEffect, useState } from 'react';
import { Container, Form } from 'react-bootstrap';
import { useParams } from 'react-router-dom';
import axios from '../../../config/axiosInit';

const ProductEdit = () => {
  //State
  const [product, setProduct] = useState({});

  const URL = import.meta.env.VITE_API_HAMBURGUESERIA;

  //Param
  const { id } = useParams();

  //console.log(id);

  useEffect(() => {
    getOne();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  console.log(product);

  const getOne = async () => {
    try {
      //la petición con fetch
      /*  const res = await fetch(`${URL}/${id}`);
       const productApi = await res.json(); */

      const res = await axios.get(`${URL}/${id}`);
      const productApi = res.data;

      setProduct(productApi);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div>
      <Container className='py-5'>
        <h1>Edit Product</h1>
        <hr />
        {/* Form Product */}
        <Form className='my-5'>
          <Form.Group className='mb-3' controlId='formBasicEmail'>
            <Form.Label>Product name*</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: burger'
              defaultValue={product?.productName}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Price*</Form.Label>
            <Form.Control
              type='number'
              placeholder='Ej: 50'
              defaultValue={product?.price}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicPassword'>
            <Form.Label>Image URL*</Form.Label>
            <Form.Control
              type='text'
              placeholder='Ej: https://media.istockphoto.com/photos/two-freshly-baked-french-id1277579771?k=20'
              defaultValue={product?.urlImg}
            />
          </Form.Group>
          <Form.Group className='mb-3' controlId='formBasicCheckbox'>
            <Form.Label>Category*</Form.Label>
            <Form.Select value={product.category}>
              <option value=''>Select an option</option>
              <option value='de-carne'>de Carne</option>
              <option value='de-cerdo'>de Cerdo</option>
              <option value='de-pollo'>de Pollo</option>
              <option value='veganas'>Veganas</option>
              <option value='bebidas'>Bebidas</option>
              <option value='postre'>Postre</option>
            </Form.Select>
          </Form.Group>
          <div className='text-end'>
            <button className='btn-orange'>Update</button>
          </div>
        </Form>
      </Container>
    </div>
  );
};

export default ProductEdit;
