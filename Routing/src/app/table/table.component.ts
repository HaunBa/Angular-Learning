import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  products:any;
  constructor(private _productService : ProductServiceService) { }

  ngOnInit(): void {
    this._productService.getAllProducts().subscribe(res=>{
      this.products = res;
    });
  }

}
