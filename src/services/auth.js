const provider = {
  isAuthenticated() {
    return localStorage.getItem('@APP-AUTHORIZATION') != null
  },

  signin(user) {
    localStorage.clear()
    localStorage.setItem('@APP-AUTHORIZATION', user.token)
  },
  signout() {
    localStorage.clear()
  }
}
export { provider }

const tokenAuthorization = localStorage.getItem('@APP-AUTHORIZATION')
export const config = {
  headers: { Authorization: `Bearer ${tokenAuthorization}` }
}
