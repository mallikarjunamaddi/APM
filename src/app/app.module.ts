import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './welcome/welcome.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { UserModule } from './user/user.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { SummaryModule } from './summary/summary.module';
import { SharedModule } from './shared/shared.module';
import { HttpClientModule } from '@angular/common/http';
import { ProductService } from './product/product.service';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    NavBarComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    SharedModule,
    SummaryModule,
    UserModule,
    AppRoutingModule,
    BrowserAnimationsModule
  ],
  providers: [ProductService],
  bootstrap: [AppComponent, ]
})
export class AppModule { }
