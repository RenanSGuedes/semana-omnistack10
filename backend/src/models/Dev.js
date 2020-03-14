const mongoose = require('mongoose')
const PointSchema = require('./PointSchema')

mongoose.connect('mongodb+srv://omnistack_database:canto4789@cluster0-efbho.mongodb.net/testando?retryWrites=true&w=majority',{
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true
})

const DevSchema = new mongoose.Schema({
  github_username: String,
  techsArray: [String],
  blog: String,
  avatar_url: String,
  location: {
    type: PointSchema,
    required: true,
    index: '2dsphere'
  }
})

module.exports = mongoose.model('Dev', DevSchema)
