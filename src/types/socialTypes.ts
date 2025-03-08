import { ReactElement } from "react"

export interface SocialTypes {
    id:number
    name:string,
    url:string,
    title: string,
    icon: ReactElement,
    target:string|undefined,
    desktopHidden: boolean
 }