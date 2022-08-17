import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {ErrorApp} from "./ErrorApp";
import {product} from "../models/product";
import {catchError} from "rxjs";
import { CookieService } from "ngx-cookie-service";

@Injectable({
  providedIn: 'root'
})
export class UserService {

  constructor(private http: HttpClient,public errorApp: ErrorApp, private cookies: CookieService) {}

  login(user: any) {

    return this.http
      .post<product[]>('http://localhost:3000/api/login', user)
      .pipe(
        catchError((res) => this.errorApp.handleError(res))
      );

  }
  setToken(token: any) {
    this.cookies.set("token", token);
  }
  getToken() {
    return this.cookies.get("token");
  }

}
