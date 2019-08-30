import { Component, OnInit } from '@angular/core';
import { IProduct, IProductListResolved } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  pageTitle: string = "Product List";
  errorMessage: string;
  showImage: boolean = false;
  products: IProduct[];

  _filter: string = "";

  get filter(): string {
    return this._filter;
  }
  set filter(value: string) {
    this._filter = value;
    this.filterProductsList();
  }
  filteredProducts: IProduct[];
  constructor(private activatedRoute: ActivatedRoute) {

  }

  ngOnInit() {
    // this.productService.getProducts().subscribe((products) => {
    //   this.products = products;
    //   this.filteredProducts = this.products;
    // }, (error) => console.error(error));
    const resolvedData: IProductListResolved = this.activatedRoute.snapshot.data['products'];
    this.products = resolvedData.products
    console.log(this.products);
    this.filteredProducts = this.products;
    this.errorMessage = resolvedData.error;
    this.filter = this.activatedRoute.snapshot.queryParamMap.get('filterBy') || '';
    console.log(this.filter);
    this.showImage = this.activatedRoute.snapshot.queryParamMap.get('showImage') === 'true';
  }

  onDataRetrieval() {
    if (!this.products) {
      console.log(this.errorMessage)
      this.pageTitle = "Products are unavailble "
    }
  }

  toggleShowImage(): void {
    this.showImage = !this.showImage;
  }

  filterProductsList() {
    let filterValue = this.filter.toLowerCase();
    if (this.products) {
      this.filteredProducts = this.products.filter((product: IProduct) => product.name.toLowerCase().includes(filterValue));
    }
  }

  onRatingClicked(message: string) {
    console.log(message);
    this.pageTitle = "Product List: " + message;
  }
}
