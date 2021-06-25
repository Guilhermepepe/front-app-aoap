import axios from 'axios'


const instance = axios.create({
    baseURL: 'http://ec2-3-142-238-1.us-east-2.compute.amazonaws.com/'
})

export default instance
