import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Product } from './product.Product';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  private url = 'https://localhost:7035/api/Product/';

  constructor(private httpClient: HttpClient) { }

  getAllProducts(){

    return this.httpClient.get(`${this.url}GetAllProducts`);
  }
}
