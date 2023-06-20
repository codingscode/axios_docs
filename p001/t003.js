
import axios from 'axios'


const app = axios



function getContaUsuario() {
  return app.get('http://192.168.1.17:3000/user/3')
}

function getPermissaoUsuario() {
  return app.get('http://192.168.1.17:3000/user/3/permissoes')
}

const [acct, perm] = await Promise.all([getContaUsuario(), getPermissaoUsuario()])

// OR

Promise.all([getContaUsuario(), getPermissaoUsuario()])
  .then(function ([acct, perm]) {
    // ...
    console.log(acct)
    console.log(perm)
  })



