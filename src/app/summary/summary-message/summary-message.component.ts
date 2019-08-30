import { Component, OnInit } from '@angular/core';
import { ProductService } from 'src/app/product/product.service';

@Component({
  selector: 'app-summary-message',
  templateUrl: './summary-message.component.html',
  styleUrls: ['./summary-message.component.css']
})
export class SummaryMessageComponent implements OnInit {
 public productsCount: number;
  constructor(private productService: ProductService) {

   }

  ngOnInit() {
   this.productService.getProducts().subscribe(data => this.productsCount = data.length)
  }

  onClose() {

  }

}
