import axios from 'axios'

export default() => {
    return axios.create({
        baseURL: `http://localhost:3000/server/api/`,
        withCredentials: false,
        xsrfCookieName: 'session',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        }
    });
}