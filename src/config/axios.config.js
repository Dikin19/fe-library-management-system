import axios from "axios";

const api = axios.create({
    baseURL: 'https://library.msodikin.web.id/'
})

export default api