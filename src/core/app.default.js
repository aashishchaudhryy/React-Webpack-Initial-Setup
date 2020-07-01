import axios from 'axios';
// axios.defaults.baseURL = (process.env.NODE_ENV === 'development' ? 'http://192.168.1.210:5000/api/' : '/api')
axios.defaults.baseURL = (process.env.NODE_ENV === 'development' ? 'http://localhost:5500/api'   : '/api')
// axios.defaults.baseURL = 'http://104.210.65.134:25501/api/' 
// axios.deaults.headers.post['Content-Type'] = 'application/json';