import axios from 'axios'


const app = axios


app.post('http://192.168.1.17:3000/user', {
    primeironome: 'bob',
    ultimonome: 'salim'
  })
  .then((res, req) => {
     console.log(res)
    
  })
  .catch((err) => {
    console.log(err)
  })


