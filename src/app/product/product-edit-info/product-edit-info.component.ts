import { Component, OnInit } from '@angular/core';
import { IProduct, IProductResolved } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit-info',
  templateUrl: './product-edit-info.component.html',
  styleUrls: ['./product-edit-info.component.css']
})
export class ProductEditInfoComponent implements OnInit {
public product: IProduct;

  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
     this.activatedRoute.parent.data.subscribe( data =>
      {
        const resolvedData:IProductResolved = data['product'];
        this.product = resolvedData.product;
      })
  }
}
