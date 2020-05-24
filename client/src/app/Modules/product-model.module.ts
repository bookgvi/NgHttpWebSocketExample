import { NgModule } from '@angular/core';
import { ProductDataSourceService } from '../Model/product-dataSource.service';
import { ProductRepositoryService } from '../Model/product-repository.service';

@NgModule({
  providers: [
    ProductDataSourceService,
    ProductRepositoryService
  ]
})
export class ProductModelModule {}
