import { Injectable } from '@angular/core';
import { Product } from './Product';
import { ProductDataSourceService } from './product-dataSource.service';
import { Observable } from 'rxjs';
import { HttpResponse } from '@angular/common/http';

@Injectable()
export class ProductRepositoryService {
  private readonly products: Observable<HttpResponse<Product[]>>;

  constructor(private dataSource: ProductDataSourceService) {
    this.products = this.dataSource.getData;
  }

  public get getProducts(): Observable<HttpResponse<Product[]>> {
    return this.products;
  }
}
