import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { SummaryMessageComponent } from './summary-message/summary-message.component';

const routes = [{
path: "summaryMessage",
component: SummaryMessageComponent,
outlet: "summary"
}]

@NgModule({
  declarations: [SummaryMessageComponent],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ]
})
export class SummaryModule { }
