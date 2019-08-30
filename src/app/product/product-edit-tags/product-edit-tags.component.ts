import { Component, OnInit } from '@angular/core';
import { IProduct } from '../product';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-product-edit-tags',
  templateUrl: './product-edit-tags.component.html',
  styleUrls: ['./product-edit-tags.component.css']
})
export class ProductEditTagsComponent implements OnInit {

  public product: IProduct;
  constructor(private activatedRoute: ActivatedRoute) { }

  ngOnInit() {
   this.activatedRoute.parent.data.subscribe( data => {
     this.product = data['product'].product;
   })
  }

}
