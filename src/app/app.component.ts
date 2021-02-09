import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../app/Product';
import {ProductsStoreData} from '../app/mock-Products';
import { stringify } from '@angular/compiler/src/util';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:{<h1>sfdf</h1>},
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Shop';
  selectedProduct?:Product;
  ProductsData:Product[] =ProductsStoreData;
  categoryList?:string[] ;
  constructor() {
    this.categoryList= undefined;//_.uniqBy(this.ProductsData, 'category');
  }
  ngOnInit(): void {}
   onSelect(product:Product):void{
    if(this.selectedProduct==product){
      this.selectedProduct = undefined;
      console.log("onSelect:" + JSON.stringify(product));
    }
    else
      this.selectedProduct = product;
     
   }  
}
