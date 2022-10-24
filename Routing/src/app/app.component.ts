import { Component } from '@angular/core';
import { Observable } from 'rxjs';
import { ProductService } from './product.service';
import { Product } from '../app/product.Product';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Routing';

  products: any;

  constructor(private service : ProductService){}

  ngOnInit(){
    this.service.getAllProducts()

    .subscribe((response) => {

      this.products = response;

    });
  }
}
