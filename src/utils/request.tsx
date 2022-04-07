import axios from 'axios';

export async function get(url: string) {
  return axios
    .get(url, {
      headers: {
        'Access-Control-Allow-Origin': '*',
      },
      withCredentials: true,
    })
    .then(function (response) {
      return response;
    })
    .catch(function (error) {
      return error;
    });
}
