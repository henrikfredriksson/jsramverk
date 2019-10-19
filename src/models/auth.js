let endpoint = 'https://me-api.henrikfredriksson.me/login'

if (process.env.NODE_ENV === 'development') {
  endpoint = 'http://localhost:5000/login'
}





let auth = {
  user: '',
  token: '',
  clear: function () {
    auth.user = ''
    auth.token = ''
  },

  login: async (username, password) => {
    try {
      const response = await fetch(endpoint,
        {
          headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json'
          },
          method: 'POST',
          body: JSON.stringify({
            user: username,
            password: password
          })
        })

      const { data } = await response.json()

      auth.token = data.token
      auth.user = data.user

      return data
    } catch (error) {
      return error
    }
  }
}



export default auth
