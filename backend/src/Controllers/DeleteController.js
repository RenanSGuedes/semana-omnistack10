const Dev = require('../models/Dev')

module.exports = {
  async destroy(request,response) {

  await Dev.deleteOne({
    github_username: request.params.user
  })
    return response.send(`${request.params.user} foi deletado`)
  }
}