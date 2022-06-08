/* eslint-disable*/
import axios from 'axios';
import { showAlert } from './alerts';

export const updateSettings = async (data, type) => {
  const URL = window.location;
  try {
    const url =
      type === 'password'
        ? `${URL.protocol}//${URL.host}/api/v1/users/updatePassword`
        : `${URL.protocol}//${URL.host}/api/v1/users/updateMe`;

    const res = await axios({
      method: 'PATCH',
      url,
      data,
    });
    if (res.data.status === 'success') {
      showAlert('success', `${type.toUpperCase()} Updated!!`);
      window.setTimeout(() => {
        location.assign('/');
      }, 1500);
    }
  } catch (err) {
    console.log(err.response.data);
  }
};
