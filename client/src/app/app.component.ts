import { Component } from '@angular/core';
import { ProductRepositoryService } from './Model/product-repository.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  constructor(private products: ProductRepositoryService) {
    // console.log(products.getProducts);
  }
}
