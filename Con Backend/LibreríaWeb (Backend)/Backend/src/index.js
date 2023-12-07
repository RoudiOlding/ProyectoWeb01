const server = require('./server')

const init = async () => {
const app = server()
const port = 3100

console.log('Server listening on port', port)

app.run(port)
const{QueryTypes}=require('sequelize');
}

init()