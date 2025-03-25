import {gql} from "@apollo/client"

export const GET_MAIN_NAV = gql `
    query getMen {
        menu(id: "dGVybToxOA==") {
            menuId
            name
            menuItems {
            nodes {
                id
                label
            }
            }
        }
    }
`


// {
//     "menu": {
//         "__typename": "Menu",
//         "menuId": 18,
//         "name": "main-menu",
//         "menuItems": {
//             "__typename": "MenuToMenuItemConnection",
//             "nodes": [
//                 {
//                     "__typename": "MenuItem",
//                     "id": "cG9zdDo2Mg==",
//                     "label": "Animal Facts"
//                 },
//                 {
//                     "__typename": "MenuItem",
//                     "id": "cG9zdDo2Mw==",
//                     "label": "Dev Thoughts"
//                 }
//             ]
//         }
//     }
// }
