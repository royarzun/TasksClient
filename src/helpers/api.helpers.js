import axios from 'axios';
import * as environment from '../env.config';

const BASE_URL = environment['localhost']['BASE_URL'];


export const csApi = axios.create({
    baseURL: BASE_URL + 'som/api',
    timeout: 35000,
    withCredentials: true,
    xsrfCookieName: 'csrftoken',
    xsrfHeaderName: 'X-CSRFToken'
});


export const reflect = promise => {
    return promise.then(
        v => ({v, status: "resolved"}),
        e => ({e, status: "rejected"})
    );
};
