const EnderecoSchema = `
  type Enderecos {
    id: Int!
    username: String!
    email: String!
  }
`

const EnderecoQuery = `
  allEnderecos: [Enderecos]
  endereco(id: Int!): Enderecos
`
module.exports = { EnderecoSchema, EnderecoQuery }
