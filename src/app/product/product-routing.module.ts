import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ProductListComponent } from './product-list/product-list.component';
import { ProductDetailsGaurd } from './product-details.guard';
import { ProductDetailsComponent } from './product-details/product-details.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProductResolverService } from './product-resolver.service';
import { ProductListResolveService } from './product-list-resolve.service';
import { ProductEditTagsComponent } from './product-edit-tags/product-edit-tags.component';
import { ProductEditInfoComponent } from './product-edit-info/product-edit-info.component';
import { ProductEditGuard } from './product-edit/product-edit.guard';

const routes: Routes = [
      {
        path: '', component: ProductListComponent,
        resolve: { products: ProductListResolveService }
      },
      {
        path: ':id',
        canActivate: [ProductDetailsGaurd],
        resolve: { product: ProductResolverService },
        component: ProductDetailsComponent
      },
      {
        path: ':id/edit', component: ProductEditComponent,
        resolve: { product: ProductResolverService },
        canDeactivate: [ProductEditGuard],
        children: [
          {
            path: '', redirectTo: 'info', pathMatch: "full"
          },
          {
            path: 'info', component: ProductEditInfoComponent
          },
          {
            path: 'tags', component: ProductEditTagsComponent
          }
        ]
      }
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class ProductRoutingModule { }
