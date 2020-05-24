import { Injectable } from '@angular/core';
import { Product } from './Product';
import { ProductDataSourceService } from './product-dataSource.service';
import { Observable } from 'rxjs';

@Injectable()
export class ProductRepositoryService {
  private readonly products: Observable<any>;

  constructor(private dataSource: ProductDataSourceService) {
    this.products = this.dataSource.getData;
  }

  public get getProducts(): Observable<any> {
    return this.products;
  }
}
