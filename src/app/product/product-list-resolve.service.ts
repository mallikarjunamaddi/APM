import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { IProductListResolved } from './product';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from "@angular/router";
import { ProductService } from './product.service';
import { catchError, map } from 'rxjs/operators';
import { of, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductListResolveService implements Resolve<IProductListResolved>{
  constructor(private productService: ProductService) { }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductListResolved> {
    return this.productService.getProducts()
      .pipe(map(data => ({ products: data })),
        catchError(error => {
          const message: string = `Retrieval Error ${error}`;
          console.log(message);
          return of({ products: null, error: message });
        }))
  }
}
