//ATTENTION - this component collects base information to feed into axiosWithAuth
import { axiosWithAuth } from '../../utils/axiosWithAuth';

export const useAPI = config => {
  const { method, url, data } = config;

  const moveData = () => {
    console.log('Here is useApi.js Config',config);
    //Example...in login case... "post, /api/auth/login , sue 1234
    return axiosWithAuth()
      [method](url, data)
      .then(res => res.data)
      .catch(err => {
        console.log(err);
        return err;
      });
  };
  // To better understand the use of this hook see this...
  // console.log('Here is useApi.js dataAPI', dataAPI)
  return [ moveData];
};


