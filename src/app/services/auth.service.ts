import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
// @ts-ignore
import {Observable} from 'rxjs/Observable';

const authApi = 'http://localhost:8080/api/auth/'
const httpOptions = {
    headers: new HttpHeaders({ 'Content-Type':'application/json'})
}

@Injectable({
    providedIn: 'root'
})
export class AuthService {

    constructor(private http: HttpClient) {}

    login(username: string, password: string): Observable<any> {
        return this.http.post(authApi + '/signin', {
            username,
            password
        }, httpOptions)
    }

    register(user: string, email: string, password: string): Observable<any> {
        return this.http.post(authApi + 'signup', {
            user,
            email,
            password
        }, httpOptions)
    }
}
