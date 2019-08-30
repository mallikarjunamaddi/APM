import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { StarRatingComponent } from './star-rating/star-rating.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    StarRatingComponent,
    PageNotFoundComponent,
  ],
  imports: [
    CommonModule
  ],
  exports: [StarRatingComponent, CommonModule, FormsModule]
})
export class SharedModule { }
