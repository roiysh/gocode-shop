import { Injectable } from '@angular/core';
import {Product} from '../app/Product';
import {ProductsStoreData} from '../app/mock-Products';
import { Observable , of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataRetrieverService {

  constructor() { }

  GetProducts():Observable<Product[]>
  {
    return of (ProductsStoreData);
  }
}
