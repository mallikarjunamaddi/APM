import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, IProductResolved } from '../product';

@Component({
  selector: 'app-product-details',
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})
export class ProductDetailsComponent implements OnInit {
  public pageTitle: string = "Product Details";
  public errorMessage: string;
  public product: IProduct;
  // queryParams = {
  //   filterBy:"",
  //   showImage:"",
  // }
  constructor(private activatedRoute: ActivatedRoute,
    private router: Router) {
    // this.productID = +this.activatedRoute.snapshot.paramMap.get('id');
    // this.queryParams.filterBy = this.activatedRoute.snapshot.paramMap.get('filterBy');
    // this.queryParams.showImage = this.activatedRoute.snapshot.paramMap.get('showImage');
  }

  ngOnInit() {
    // this.productService.getProductByID(this.productID)
    //                    .subscribe(product => this.product = product[0],
    //                               error => console.error(error));
    const resolvedData: IProductResolved = this.activatedRoute.snapshot.data["product"];
      this.product = resolvedData.product;
      console.log(this.product);
      if (!this.product) { 
      this.pageTitle = "No Product Found";
      this.errorMessage = resolvedData.error;
    }
  }
  onBack(): void {
    this.router.navigate(['/products'],
      { queryParamsHandling: "preserve" })
  }

}
