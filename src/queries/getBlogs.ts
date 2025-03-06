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

  // typing below for use w/ component

  export interface BlogInterface {
    posts: {
      nodes :  BlogPostInterface[]
    }
  }

  export interface BlogPostInterface {
    id:number,
    title:string,
    content:string,
    author: {
      node : AuthorInterface
    }
  }

  export interface AuthorInterface {
    name:string
  }