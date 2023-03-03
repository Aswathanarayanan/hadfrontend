import axios from 'axios';

// The API endpoint where login data is sent to
const requesturl = `http://localhost:9090/fetchdetails`

const fetch = async (id) => {
 
  const response = await axios.post(`${requesturl}?id=${id}`)
  
  return response.data
}

// Export the method as an object so that it can be accessible outside this file as a service
const exportObject = { fetch }
export default exportObject