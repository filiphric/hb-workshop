const axios = require('axios')

export const createDefaultUser = (on: Cypress.PluginEvents, config: Cypress.PluginConfigOptions) => {

  return new Promise((resolve) => {
    axios.post(`${config.baseUrl}/api/reset`)
    axios.post(`${config.baseUrl}/api/signup`, {
      email: 'filip@example.com',
      password: 'Asdf.1234#'
    }).then(({ data }) => {
      config.env.user = data
      resolve(config);
    })
  })

}
