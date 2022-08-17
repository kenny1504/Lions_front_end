import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {catchError} from "rxjs";
import {product} from "../models/product";
import {ErrorApp} from "./ErrorApp";
import {UserService} from "./user.service";
import { HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductAndServiceService {

  constructor(private http: HttpClient,public errorApp: ErrorApp,public userService: UserService) {}

  GetProductAndServices () {

    const header = new HttpHeaders().set('x-access-token',this.userService.getToken()); // may be localStorage/sessionStorage
    const headers = { headers: header };
    console.log(headers)
    return this.http
      .get<product[]>('http://localhost:3000/api/productServices',headers)
      .pipe(
        catchError((res) => this.errorApp.handleError(res))
      );

  }

}
