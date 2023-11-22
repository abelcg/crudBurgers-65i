/* eslint-disable react/prop-types */
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';
import axios from '../../../../config/axiosInit';
import { STATUS } from '../../../../constants';

const Product = ({ product, getAPI }) => {
  const URL = import.meta.env.VITE_API_HAMBURGUESERIA;

  const handleDelete = (id) => {
    Swal.fire({
      title: 'Are you sure?',
      text: "You won't be able to revert this!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Delete',
    }).then(async (result) => {
      if (result.isConfirmed) {
        try {
         //la petición delete con fetch
          /*  const res = await fetch(`${URL}/${id}`, {
            method: "DELETE",
            headers: { "Content-Type": "application/json" },
          }); */

          const res = await axios.delete(`${URL}/${id}`, {
            headers: {
              "Content-Type": "application/json",
              "x-access-token": JSON.parse(localStorage.getItem("user-token"))
                .token,
            },
          });

          console.log(res);
          
          if (res.status === STATUS.STATUS_OK) {
            Swal.fire('Deleted!', 'Your file has been deleted.', 'success');
            //volver a recargar la tabla
            getAPI();
          }
        } catch (error) {
          console.log(error);
        }
      }
    });
  };

  return (
    <tr>
      <td>{product?._id}</td>
      <td>{product?.productName}</td>
      <td>${product?.price}</td>
      <td>
        <p className='truncate-img-link m-0'>{product?.urlImg}</p>
      </td>
      <td>{product?.category}</td>
      <td className='w-25'>
        <div className='d-flex justify-content-center'>
          <Link
            to={`/product/edit/${product?._id}`}
            className='btn-orange mx-1 text-decoration-none text-center'
          >
            Update
          </Link>
          <button
            className='btn-red mx-1'
            onClick={() => handleDelete(product?._id)}
          >
            Delete
          </button>
        </div>
      </td>
    </tr>
  );
};

export default Product;
