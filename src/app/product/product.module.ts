import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http'
import { ProductListComponent } from './product-list/product-list.component';
import { ConvertToSpacesPipe } from './convertToSpaces.pipe';
import { SharedModule } from '../shared/shared.module';
import { ProductService } from './product.service';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductRoutingModule } from './product-routing.module';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductEditTagsComponent } from './product-edit-tags/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit-info/product-edit-info.component';

@NgModule({
  declarations: [
    ProductListComponent,
    ConvertToSpacesPipe,
    ProductDetailsComponent,
    ProductEditComponent,
    ProductEditInfoComponent,
    ProductEditTagsComponent,
  ],
  imports: [
    HttpClientModule,
    SharedModule,
    ProductRoutingModule,
  ],
  exports: [],
  // providers: [ProductService]
})
export class ProductModule { }
