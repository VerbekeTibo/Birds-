import gql from 'graphql-tag'

export const GET_USER_BY_UID = gql`
  query findByUid($uid: String!) {
    findByUid(uid: $uid) {
      id
      uid
      observations {
        
        name
        location {
          id
          name
        }
        bird {
          id
          name
          fullname
          category
        }
        userId
        updatedAt
        createdAt
      }
      observationCount
      createdAt
      updatedAt
    }
  }
`
