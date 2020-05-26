import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { ProductModelModule } from './Modules/product-model.module';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { DrawCellsBgDirective } from './Directives/draw-cells-bg.directive';
import { SetColorDirective } from './Directives/set-color.directive';

@NgModule({
  declarations: [
    AppComponent,
    DrawCellsBgDirective,
    SetColorDirective
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ProductModelModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
