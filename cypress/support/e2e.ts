import '@bahmutov/cy-api'
import './custom_commands/login'
import './custom_commands/addBoardApi'
import './custom_commands/store'
import './custom_commands/getByData'
import './custom_commands/signupApi'
const registerCypressGrep = require('cypress-grep')
registerCypressGrep()
chai.use(require('chai-json-schema'));