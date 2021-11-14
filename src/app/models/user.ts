import {UserRoles} from "./user-roles";

export interface User {
    id: string
    name: string
    username: string
    password: string
    email: string
    role: UserRoles
}
