import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product-list/Product';

const URL = "https://6387aa25d9b24b1be3f6e992.mockapi.io/api/v1/yerbasmate";

@Injectable({
  providedIn: 'root'
})
export class ProductDataService {

  constructor(private http: HttpClient) { }

  public getAll(): Observable<Product[]>{
    return this.http.get<Product[]>(URL);
  }
}
