import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IProduct, IProductResolved } from '../product';

@Component({
  selector: 'app-product-edit',
  templateUrl: './product-edit.component.html',
  styleUrls: ['./product-edit.component.css']
})
export class ProductEditComponent implements OnInit {

  public pageTitle: string = "Edit Product";
  public errorMessage: string;
  private originalProduct: IProduct;
  private modifiedProduct: IProduct;
  get product(): IProduct {
    return this.modifiedProduct;
  }
  set product(value: IProduct) {
    this.originalProduct = { ...value };
    this.modifiedProduct = value;
  }
  get isDirty(): boolean {
    return JSON.stringify(this.modifiedProduct) !== JSON.stringify(this.originalProduct);
  }
  constructor(private router: Router,
    private route: ActivatedRoute) {
    //  this.productID = +this.route.snapshot.paramMap.get("id");
  }
  ngOnInit() {
    console.log("entered");
    // this.route.paramMap.subscribe(
    //   params => {
    //     this.productID = +params.get("id");
    //     this.getProduct()
    //   });
    this.route.data.subscribe(data => {
      const resolvedData: IProductResolved = data['product'];;
      this.product = resolvedData.product;
      this.errorMessage = resolvedData.error;
      if (!this.product.name) {
        this.pageTitle = "Add Product";
        this.product.name = 'name';
        this.product.code = 'code';
        this.product.description = 'Enter Description';
        this.product.category = 'name';
        this.product.tags = ["Create tags"];
      }else{
      this.pageTitle+=": "+this.product.name;
      }
    })
  }
  // editProduct() {
  //   this.productService.putProduct()
  // }

  // addProduct() {
  //   this.productService.postProduct()
  // }
  onSave() {
    confirm("Saved Successfully");
    this.originalProduct = null;
    this.modifiedProduct = null;
  }
  onCancel() {
    this.router.navigate(['/products']);
  }
}