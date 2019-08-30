import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { WelcomeComponent } from './welcome/welcome.component';
import { PageNotFoundComponent } from './shared/page-not-found/page-not-found.component';
import { SelectiveStrategyService } from './selective-strategy.service';


const routes: Routes = [
  {path: 'welcome', component: WelcomeComponent},
  {path: 'products', loadChildren:'./product/product.module#ProductModule'},
  {path: '', redirectTo: 'welcome', pathMatch: "full"},
  {path: '**', component: PageNotFoundComponent}
];

@NgModule({
  // imports: [RouterModule.forRoot(routes, {enableTracing: true})],
  imports: [RouterModule.forRoot(routes, {
    preloadingStrategy: SelectiveStrategyService
  })],
  exports: [RouterModule]
})
export class AppRoutingModule { }
