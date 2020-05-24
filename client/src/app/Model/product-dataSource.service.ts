import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';
import { BACKEND_URL } from '../Constants/Backend';
import { map } from 'rxjs/operators';

@Injectable()
export class ProductDataSourceService {
  private dataSource: Product[];

  constructor(private http: HttpClient) {
    http.get(`${BACKEND_URL}/products`)
      // .pipe(
      //   map(res => res)
      // )
      .subscribe(data => {
        console.log(data);
        // @ts-ignore
        this.dataSource = data;
      });
  }

  public get getDataSource(): Product[] {
    return this.dataSource;
  }
}
