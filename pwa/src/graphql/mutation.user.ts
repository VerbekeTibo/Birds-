import gql from "graphql-tag";

export const createUser = gql`
  mutation CreateUser($uid: String!) {
    createUser(createUserInput: { uid: $uid }) {
    
        id
        uid
        observations {
            id
            name
            description
            createdAt
            updatedAt
        }
        observationCount
        createdAt
        updatedAt
    }
  }`