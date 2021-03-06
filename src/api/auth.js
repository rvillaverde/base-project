import ApiClient from "./apiClient"

const api = new ApiClient(process.env.API_ENDPOINT + 'api/auth', false)

const login = (username, password) => {
  return api
    .post({
      endpoint: 'login',
      data: {
        username,
        password
      }
    })
    .then((res) => res.data)
}

const validate = (token) => {
  return api
    .post({
      endpoint: 'validate',
      options: {
        headers: {
         Authorization: `Bearer ${ token }`
        }
      }
    })
    .then((res) => res.data)
}

export default {
  login,
  validate
}
