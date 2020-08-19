import axios from 'axios'

const api = axios.create({
    baseURL: 'https://randomuser.me/api/?results=200&nat=us',
})

export const getAllEmployees = () => api.get()


const apis = { getAllEmployees }

export default apis
