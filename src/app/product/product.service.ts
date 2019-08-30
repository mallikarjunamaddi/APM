import { Injectable } from '@angular/core';
import { IProduct, Product } from './product';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { tap, catchError } from 'rxjs/operators';
import { Observable, throwError, of } from 'rxjs';

Injectable({
  providedIn:"root"
})
export class ProductService {

  private productsURL = "http://localhost:3000/products";
  constructor(private http: HttpClient){}

    getProducts(): Observable<IProduct[]>
    {
      return this.http.get<IProduct[]>(this.productsURL)
                      .pipe(tap(data => console.log(data)),
                            catchError(this.errorHandler));
    }

    private errorHandler(error: HttpErrorResponse) {
      console.error(error.message);
      return throwError(error);
    }

    getProductByID(productID: number): Observable<IProduct[]>
    {
      if(!productID){
        return of([new Product()]);
      }
      const URL = this.productsURL+'?productID='+productID;
      console.log(URL)
      return this.http.get<IProduct[]>(URL)
                      .pipe(tap(data => console.log(data)),
                      catchError(this.errorHandler));
    }

    putProduct()
    {
      const URL = this.productsURL
    }

    //add
    postProduct()
    {
      const URL = this.productsURL
    }
    // patchProductByID(productID)


}