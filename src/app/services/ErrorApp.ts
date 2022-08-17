import {Injectable} from "@angular/core";
import {HttpErrorResponse} from "@angular/common/http";
import {MatSnackBar} from "@angular/material/snack-bar";
import {throwError} from "rxjs";

@Injectable({
  providedIn:'root'
})

export  class ErrorApp {

  constructor(private snackBar: MatSnackBar) {}

  public handleError(error: HttpErrorResponse) {

    if (error.status === 0) {
      console.error('An error occurred:', error);
    } else {
      console.error(
        `Backend returned code ${error.status}, body was: `, error.error);
    }
    console.error('An error occurred:', error);

    this.snackBar.open(error.error, 'Ok',{
      duration: 4000,
      panelClass: ['bg-danger', 'z-index']
    });

    return throwError(error);
  }
}
