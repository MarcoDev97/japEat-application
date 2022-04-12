import { HttpClient, HttpParams } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Auth } from '../models/auth';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  constructor(private http: HttpClient, private router: Router) {}

  data: Auth;
  error: any;

  login(formData: any) {
    this.error = null;
    const params = new HttpParams()
      .set('user', formData.user)
      .set('pass', formData.pass);
    this.http
      .get<Auth>('http://localhost:3000/login', { params: params })
      .subscribe(
        (res) => {
          this.data = res;
          this.router.navigateByUrl('home');
        },
        (err) => (this.error = err)
      );
  }

  logout() {
    this.data = null;
    this.router.navigateByUrl('login');
  }

  isLogged() {
    const isAuth = this.data && this.data.token ? true : false;
    return isAuth;

  }
}
