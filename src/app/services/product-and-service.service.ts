import {Injectable, Injector} from '@angular/core';
import {HttpClient, HttpErrorResponse} from '@angular/common/http';
import {catchError, throwError} from "rxjs";
import {product} from "../models/product";
import {MatSnackBar} from "@angular/material/snack-bar";


@Injectable({
  providedIn: 'root'
})
export class ProductAndServiceService {

  constructor(private http: HttpClient,public snackbar: MatSnackBar) {}

  GetProductAndServices () {

    return this.http
      .get<product[]>('http://localhost:3000/api/productServices')
      .pipe(
        catchError(this.handleError.bind(this))
      );

  }

  private handleError(error: HttpErrorResponse) {

    if (error.status === 0) {
      console.error('An error occurred:', error.error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }

    this.snackbar.open(error.error.toString(), 'Ok',{
         duration: 6000,
         panelClass: ['bg-danger', 'z-index']
    });

    return throwError(error);

  }

}
