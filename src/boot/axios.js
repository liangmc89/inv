import axios from 'axios'
import qs from 'qs'


axios.defaults.timeout = 20000;
axios.defaults.headers.post['Content-Type'] = 'application/x-www-form-urlencoded;charset=UTF-8';
axios.defaults.baseURL = process.env.API;
// axios.defaults.baseURL = 'http://192.168.3.103:8091/api/';
axios.interceptors.request.use((config) => {   
    if (config.method == 'post') {
        config.data = {
            ...config.data,
        }
        config.data = qs.stringify(config.data);
    } else if (config.method == 'get') {
        config.params = {
            ...config.params,
        }
    }
    return config;
}, (error) => {
    // Notify.create({
    //     message: '错误的传参!'
    // })
    return Promise.reject(error);
});
export default ({
    app,
    router,
    store,
    Vue,
}) => {   
  axios.interceptors.response.use((res) => {    
    return res.data;
}, (error) => {  
    return Promise.reject(error);
});
    Vue.prototype.$axios = axios
}