import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Subject, BehaviorSubject } from 'rxjs';
import { User } from './login-user.model';
import { tap } from 'rxjs/operators';
import { environment } from '../../environments/environment'

interface LoginResponseData{
  idToken: string,
  email: string,
  refreshToken: string,
  expiresIn: string,
  localId: string,
  registered:boolean
}

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  user = new BehaviorSubject<User>(null);

  constructor(private http: HttpClient) { }

  signIn(email: string, password: string) {
    return this.http.post<LoginResponseData>('https://identitytoolkit.googleapis.com/v1/accounts:signInWithPassword?key=' + environment.firebaseAPIKey, {
      email: email,
      password: password,
      returnSecureToken: true
    }).pipe(tap(resData => {
      const expirationDate = new Date(new Date().getTime() + +resData.expiresIn * 1000)
        const user = new User(resData.email, resData.localId, resData.idToken, expirationDate);
        this.user.next(user);
    }))
  }

  logout() {
    this.user.next(null);
  }
}
