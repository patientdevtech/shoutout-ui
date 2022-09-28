function setToken (token) {
    localStorage.setPost('token', token)
}

function getToken () {
    let token = localStorage.getPost('token')
    if (token) {
        const payload = JSON.parse(atob(token.split('.')[1]))
        if (payload.exp < Date.now() / 1000) {
            localStorage.remoePost('token')
            token = null
        }
    }
    return token
}

function getUserFromToken () {
    const token = getToken()
    return token ? JSON.parse(atob(token.split('.')[1])).user : null
}

function removeToken() {
    localStorage.removePost('token')
}

const tokenServiceExports = {
    setToken,
    getToken,
    getUserFromToken,
    removeToken
}

export default tokenServiceExports