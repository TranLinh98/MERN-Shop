import axios from 'axios';

class OrderApi {
  createOrder = (order, token) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = '/api/orders';
    return axios.post(ulr, order, config);
  };

  getOrderDetails = (id, token) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = '/api/orders/' + id;
    return axios.get(ulr, config);
  };

  payOrder = (orderId, paymentResult, token) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = `/api/orders/${orderId}/pay`;
    return axios.put(ulr, paymentResult, config);
  };

  addPayPalScript = () => {
    const url = '/api/config/paypal';
    return axios.get(url);
  };

  getMyListOrders = (token) => {
    const config = {
      headers: {
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = '/api/orders/myorders';
    return axios.get(ulr, config);
  };
}

const orderApi = new OrderApi();
export default orderApi;
