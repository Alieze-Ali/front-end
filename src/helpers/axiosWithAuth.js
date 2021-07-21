import axios from "axios";

export const axiosWithAuth = () => {
    const token = localStorage.getItem('token');

    return axios.create({
        baseURL: 'http://fakeapi.jsonparseronline.com', // temporary API for testing functionality
        headers: {
            'Content-Type': 'application/json',
            Authorization: `${token}`,
        }
    })
}
