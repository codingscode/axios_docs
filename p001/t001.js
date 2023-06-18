
import axios from 'axios'


const app = axios

// Make a request for a user with a given ID
app.get('http://192.168.1.17:3000/user?id=2')
  .then((res) => {
    // handle success
    console.log(res)
  })
  .catch((error) => {
    // handle error
    console.log(error)
  })
  .finally(() => {
    // always executed
  })

// Optionally the request above could also be done as
app.get('http://192.168.1.17:3000/user', {
    params: {
      id: 1
    }
  })
  .then((res) => {
     console.log(res)
  })
  .catch((error) => {
     console.log(error)
  })
  .finally(() => {
    // always executed
  })  

// Want to use async/await? Add the `async` keyword to your outer function/method.
async function getUser() {
  try {
    const response = await axios.get('/user?ID=12345')
    console.log(response)
  } catch (error) {
    console.error(error)
  }
}







