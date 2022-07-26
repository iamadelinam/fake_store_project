import axios from 'axios'

const res = axios.get('https://fakestoreapi.com/products')
    .then(res => res.json())
    .then(res => console.log(res))

export default res