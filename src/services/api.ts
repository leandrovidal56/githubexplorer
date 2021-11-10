// import axios from 'axios';

// const api = axios.create({
//   baseURL: ' https://api.github.com/users/',
// });

// export default api;

// console.log('teste api', api);
import axios from 'axios';

const api = axios.create({
  baseURL: 'https://api.github.com',
});

export default api;
