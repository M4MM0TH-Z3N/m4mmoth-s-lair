export const fakeAuth = {
    isAuthenticated: false,
    authenticate(cb) {
      this.isAuthenticated = true;
      setTimeout(cb, 100);
    },
    signout(cb) {
      this.isAuthenticated = false;
      setTimeout(cb, 100);
    }
  };
  
  export const setToken = (token) => localStorage.setItem('token', token);
  export const getToken = () => localStorage.getItem('token');
  export const removeToken = () => localStorage.removeItem('token');