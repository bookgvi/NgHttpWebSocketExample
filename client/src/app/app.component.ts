import { Component } from '@angular/core';
import { ProductRepositoryService } from './Model/product-repository.service';
import { Product } from './Model/Product';
import { HttpResponse } from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  private products: Product[] = [];

  constructor(private productsRepo: ProductRepositoryService) {
    productsRepo.getProducts.subscribe((data: HttpResponse<Product[]>) => {
      this.products = data.body;
    });
  }
  public get getProducts(): Product[] {
    return this.products;
  }
}
