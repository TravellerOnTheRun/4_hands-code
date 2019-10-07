import axios from 'axios';

const instance = axios.create( {
		baseURL:'https://portfolio-ccandpc.firebaseio.com/'
})


export default instance;