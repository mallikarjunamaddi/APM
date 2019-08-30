import { Injectable } from '@angular/core';
import { Resolve } from '@angular/router';
import { ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { Observable, of } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { ProductService } from './product.service';
import { IProductResolved } from './product';

@Injectable({
  providedIn: 'root'
})
export class ProductResolverService implements Resolve<IProductResolved> {

  constructor(private productService: ProductService) {
  }

  resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<IProductResolved> {
   
    const productID: string = route.paramMap.get("id");
    console.log(productID);
    if (isNaN(+productID)) {
      const message: string = `ProductID is not a valid number: ${productID}`;
      console.log(message);
      return of({ product: null, error: message })
    }

    return this.productService.getProductByID(+productID)
      .pipe(map(product => ({ product: product[0] }),
        catchError(error => {
          const message: string = `Retrieval error: ${error}`;
          console.log(message);
          return of({ product: null, error: error });
        })));
  }
}
