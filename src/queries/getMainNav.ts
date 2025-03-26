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

export interface MainNavMenu {
    menu:NavMenu
}

export interface NavMenu {
    menuId : number,
    menuItems: {
        nodes: MenuItems[]
    },
    name:string,
    _typename:string
}

export interface MenuItems{
    id:string,
    label:string,
    _typename: string   
}


