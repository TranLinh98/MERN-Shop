import axios from 'axios';

class UserApi {
  login = (email, password) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const ulr = '/api/users/login';
    return axios.post(ulr, { email, password }, config);
  };

  register = (name, email, password) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
      },
    };
    const ulr = '/api/users';
    return axios.post(ulr, { name, email, password }, config);
  };

  getUserDetails = (id, token) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = '/api/users/' + id;
    return axios.get(ulr, config);
  };

  updateUserProfile = (user, token) => {
    const config = {
      headers: {
        'Content-Type': 'application/json',
        Authorization: 'Bearer ' + token,
      },
    };
    const ulr = '/api/users/profile';
    return axios.put(ulr, user, config);
  };
}

const userApi = new UserApi();
export default userApi;
