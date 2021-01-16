import axios from 'axios';

class ProductApi {
  getAll = () => {
    const ulr = '/api/products';
    return axios.get(ulr);
  };

  getOne = (id) => {
    const ulr = '/api/products/' + id;
    return axios.get(ulr);
  };
}

const productApi = new ProductApi();
export default productApi;
