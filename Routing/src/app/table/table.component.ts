import { Component, OnInit } from '@angular/core';
import { ProductService } from '../product.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {

  products: any;

  constructor(private service : ProductService) { }

  ngOnInit(): void {
    this.service.getAllProducts()

    .subscribe((response) => {

      this.products = response;

    });
  }

}
