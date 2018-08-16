import api from "./api";

export default {
  init() {

  },
  getToken() {
    return localStorage.getItem('AUTH_TOKEN')
  },
  setToken(token) {
    localStorage.setItem('AUTH_TOKEN', token)
  },
  removeToken() {
    localStorage.removeItem('AUTH_TOKEN')
  },
  login() {
    return api.post().then(r => {}).catch(e => {})
  },
  logout() {
    this.removeToken();
  },
  refreshToken() {

  }

}
