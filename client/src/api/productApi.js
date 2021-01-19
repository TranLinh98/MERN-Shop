import axios from 'axios';

class ProductApi {
  getAll = (keyword, pageNumber) => {
    const ulr = `/api/products?keyword=${keyword}&pageNumber=${pageNumber}`;
    return axios.get(ulr);
  };

  getOne = (id) => {
    const ulr = '/api/products/' + id;
    return axios.get(ulr);
  };

  getTopRated = () => {
    const ulr = '/api/products/top';
    return axios.get(ulr);
  };

  deleteProduct = (id, token) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = `/api/products/${id}`;
    return axios.delete(ulr, config);
  };

  createProduct = (token) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = `/api/products`;
    return axios.post(ulr, {}, config);
  };

  updateProduct = (product, token) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = `/api/products/${product._id}`;
    return axios.put(ulr, product, config);
  };

  uploadImageProduct = (formdata) => {
    const config = {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    };
    const ulr = '/api/upload';
    return axios.post(ulr, formdata, config);
  };

  createReview = (id, review, token) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = `/api/products/${id}/reviews`;
    return axios.post(ulr, review, config);
  };
}

const productApi = new ProductApi();
export default productApi;
