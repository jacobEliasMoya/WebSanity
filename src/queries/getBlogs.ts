import { gql } from "@apollo/client";

export const GET_BLOGS = gql `
  query {
    posts {
      nodes {
        id
        title
        content
        author {
          node {
            name
          }
        }
      }
    }
  }
`