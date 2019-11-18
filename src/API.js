import axios from 'axios'

let config = {
    baseURL: 'https://jsonplaceholder.typicode.com/'
}

const API = axios.create(config)

export default API