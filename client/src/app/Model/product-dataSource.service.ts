import { Injectable } from '@angular/core';
import { HttpClient, HttpResponse } from '@angular/common/http';
import { Product } from './Product';
import { BACKEND_URL } from '../Constants/Backend';
import { map, delay, tap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable()
export class ProductDataSourceService {

  constructor(private http: HttpClient) {
  }

  public get getData(): Observable<HttpResponse<Product[]>> {
    return this.http.get<Product[]>(`${BACKEND_URL}/products`, { observe: 'response' })
      .pipe(
        tap(res => {
          return { ...res.body };
        })
      )
  }
}
