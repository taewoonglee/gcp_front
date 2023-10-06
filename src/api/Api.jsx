import axios from 'axios';

axios.defaults.baseURL =
    process.env.NODE_ENV === 'develpment' ? 'http://localhost:8080' : 'http://10.128.0.5:8080/';

export const Api = async (url, method, data) => {
    const body = await axios({
        url,
        method,
        data,
    });
    return body.data;

};