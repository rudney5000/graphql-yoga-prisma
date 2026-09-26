export const typeDefs = /* GraphQL */ `
  type School {
    id: Int!
    name: String!
    classes: [Class!]!
    students: [Student!]!
  }

  type Class {
    id: Int!
    name: String!
    school: School!
    students: [Student!]!
  }

  type Student {
    id: Int!
    name: String!
    school: School!
    class: Class!
  }

  type Query {
    schools: [School!]!
    school(id: Int!): School
  }

  type Mutation {
    createSchool(name: String!): School!
  }
`