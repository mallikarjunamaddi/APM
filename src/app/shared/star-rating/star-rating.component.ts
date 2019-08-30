import { Component, OnChanges, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'shared-star-rating',
  templateUrl: './star-rating.component.html',
  styleUrls: ['./star-rating.component.css']
})
export class StarRatingComponent implements OnChanges {
 @Input() rating: number;
 starsWidth: number;
 @Output() notify:EventEmitter<string> = new EventEmitter<string>();

  constructor() {}

  ngOnChanges(): void {
    this.starsWidth = this.rating * 75 / 5 ;
  }

  onClick(): void{
    this.notify.emit(`The rating ${this.rating} was clicked!`);
  }
}
