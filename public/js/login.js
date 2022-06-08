/* eslint-disable */
import axios from 'axios';
import { showAlert } from './alerts';

export const login = async (email, password) => {
  const URL = window.location;

  try {
    const res = await axios({
      method: 'POST',
      url: `${URL.protocol}//${URL.host}/api/v1/users/login`,
      // url: 'http://127.0.0.1:3000/api/v1/users/login',
      data: {
        email,
        password,
      },
    });
    console.log(res);
    if (res.data.status === 'success') {
      showAlert('success', 'Logged in successfully!');
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    showAlert('error', err.response.data.message);
  }
};

export const logout = async () => {
  const URL = window.location;

  try {
    const res = await axios({
      method: 'GET',
      // url: 'http://127.0.0.1:3000/api/v1/users/logout',
      url: `${URL.protocol}//${URL.host}/api/v1/users/logout`,
    });
    if ((res.data.status = 'success')) location.reload(true);
  } catch (err) {
    console.log(err.response);
    showAlert('error', 'Error logging out! Try again.');
  }
};
