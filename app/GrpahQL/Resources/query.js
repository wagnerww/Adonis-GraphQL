const { UserQueries } = require('./User/user.schema')

const Query = `
  type Query{
    ${UserQueries}
  }
`
module.exports = Query
