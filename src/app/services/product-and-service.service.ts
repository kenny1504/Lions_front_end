import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductAndServiceService {

  constructor(private http: HttpClient ) {
  }

  GetProductAndServices ()
  {
    return  this.http.get('http://localhost:3000/api/productServices');
  }

}
