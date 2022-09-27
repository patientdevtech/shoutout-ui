import tokenServiceExports from "./tokenService"
import tokenService from "./tokenService"
const BASE_URL = `${process.env.REACT_APP_SOB_API_URL}/user`

function signup(user) {
    return fetch(BASE_URL + '/signup', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(user)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Username not available.  Choose another username!')
    })
    .then(({token}) => {
        tokenService.setToken(token)
    })
}

function login(creds) {
    return fetch(BASE_URL + '/login', {
        method: 'POST',
        headers: new Headers({'Content-Type': 'application/json'}),
        body: JSON.stringify(creds)
    })
    .then(res => {
        if (res.ok) return res.json()
        throw new Error('Credentials not valid.  Try Again.')
    })
    .then(({token}) => tokenService.setToken(token))
}

function getUser() {
    return tokenService.getUserFromToken()
}

function logout() {
    tokenServiceExports.removeToken()
}

const userTokenExports = {
    signup,
    getUser,
    logout,
    login
}

export default userTokenExports