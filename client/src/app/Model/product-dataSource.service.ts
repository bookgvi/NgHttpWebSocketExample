import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Product } from './Product';
import { BACKEND_URL } from '../Constants/Backend';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ProductDataSourceService {
  private dataSource: Observable<Product[]>;

  constructor(private http: HttpClient) {
  }

  public get getData(): Observable<Object> {
    return this.http.get(`${BACKEND_URL}/products`)
      .pipe(
        map(res => res)
      );
  }
}
