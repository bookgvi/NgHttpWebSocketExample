import { Injectable } from '@angular/core';
import { Product } from './Product';
import { ProductDataSourceService } from './product-dataSource.service';

@Injectable()
export class ProductRepositoryService {
  private readonly products: Product[] = []

  constructor(private dataSource: ProductDataSourceService) {
    this.products = dataSource.getDataSource;
  }

  public get getProducts(): Product[] {
    return this.products;
  }
}
