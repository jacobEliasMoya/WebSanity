  import { gql } from "@apollo/client";

  export const GET_BLOGS = gql `
    query {
      posts {
        nodes {
          id
          title
          content
          featuredImage {
            node {
              id
              sourceUrl
            }
          }
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
  },
  featuredImage: {
    node: FeaturedImageInterface
  }
}

export interface AuthorInterface {
  name:string
} 

export interface FeaturedImageInterface {
  id: string,
  sourceUrl: string
} 