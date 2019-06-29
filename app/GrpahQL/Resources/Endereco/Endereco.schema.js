const EnderecoTypes = `
  type Endereco {
    id:ID!
    user_id:User!
    endereco:String!
    numero:String!
    bairro:String
    complemento:String
  }
`

module.exports = { EnderecoTypes }
