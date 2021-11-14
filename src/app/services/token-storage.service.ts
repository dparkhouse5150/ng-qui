import {Injectable} from '@angular/core';

const TOKEN_KEY = 'auth-token'
const USER_KEY = 'auth-user'

@Injectable({
    providedIn: 'root'
})
export class TokenStorageService {

    /**
     * we are not instantiating the service
     * the constructor is pointless
     */
    constructor() {
    }

    signOut(): void {
        window.sessionStorage.clear()
    }

    /**
     *
     * @param token
     */
    public saveToken(token: string): void {
        window.sessionStorage.removeItem(TOKEN_KEY)
        window.sessionStorage.setItem(TOKEN_KEY, token)
    }

    /**
     * simple method for getting a token from session storage
     *
     * @returns -- a token key is returned
     */
    public getToken(): string | null {
        return window.sessionStorage.getItem(TOKEN_KEY)
    }

    /**
     * simple method for saving a user within
     * the session storage
     *
     * @param user -- user to save
     */
    public saveUser(user: any): void {
        window.sessionStorage.removeItem(USER_KEY)
        window.sessionStorage.setItem(USER_KEY, JSON.stringify(user))
    }

    /**
     * simple method for getting a user with session
     * storage
     *
     * @returns -- returns an empty object if the user
     *             couldn't be found
     *
     */
    public getUser(): any {
        const user = window.sessionStorage.getItem(USER_KEY)

        if (user) {
            return JSON.parse(user);
        }

        return {}
    }
}
