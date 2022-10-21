import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Product } from './interfaces/product';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

  constructor(private _http : HttpClient) { }

  getAllProducts(){
    const headerDict = {
      'Content-Type': 'application/json',
      'Accept': 'application/json',
      'Access-Control-Allow-Headers': 'Content-Type',
      'Access-Control-Allow-Origin': 'https://localhost:7035/'
    }

    const requestOptions = {
      headers: new HttpHeaders(headerDict),
    };
    return this._http.get('https://localhost:7035/api/Product/GetAllProducts');
  }

  getProductById(id:number){
    return this._http.get(`localhost:7035/api/products/GetProductById/${id}`);
  }

  addProduct(product: Product){
    this._http.post(`localhost:7035/api/products/AddProduct`, product);
  }
}
