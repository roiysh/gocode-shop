import { Component , EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Product} from '../app/Product';
import { DataRetrieverService } from './data-retriever.service';
import { MessageService } from './message.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  //template:{<h1>sfdf</h1>},
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'My Shop';
  selectedProduct?:Product;
  ProductsData?:Product[] ;
  categoryList?:string[] ;
  constructor(private dataRetrieverService:DataRetrieverService,private messageService: MessageService) {
    this.categoryList= undefined;//_.uniqBy(this.ProductsData, 'category');
    this.messageService.add('AppComponent: Constructor');

  }
  ngOnInit(): void {
    this.dataRetrieverService.GetProducts()
    .subscribe(Products=>this.ProductsData=Products);
    this.messageService.add('Appcomponent:Product Loaded');
  } 
  
   onSelect(product:Product):void{
    if(this.selectedProduct==product){
      this.selectedProduct = undefined;
      console.log("onSelect:" + JSON.stringify(product));
    }
    else
    {
      this.selectedProduct = product;
      this.messageService.add(`ProductComponent: Selected product id=${product.id}`);
    }
     
   }  
}
