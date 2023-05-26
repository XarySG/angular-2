import { Injectable } from '@angular/core';
import { BehaviorSubject, of } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';

@Injectable()
export class ProductService {
  constructor() {}
  // public productName = new BehaviorSubject<string>('');
  // castProduct = this.productName.asObservable();

  // public productPrice = new BehaviorSubject<string>('');
  // castPrice = this.productPrice.asObservable();

  /*
    public broadCastProductName(name:string, price:string){
        this.productName.next(name);
        this.productPrice.next(price);
    }
    */

  products: Product[] = [];

  public sendProducts(name: string, pclass: string, level:number, ilvl:number, coins:number, age:number, weapon1:string, weapon2:string, pet:string, petname:string): Observable<Product[]> {
    if (name != '') {
      this.products.push({ name: name, pclass: pclass, level: level, ilvl: ilvl, coins:coins, age: age, weapon1: weapon1, weapon2: weapon2, pet: pet, petname: petname});
    }
    return of(this.products);
  }
}
export interface Product {
  name: string;
  pclass: string;
  level: number;
  ilvl: number;
  coins: number;
  age: number;
  weapon1: string;
  weapon2: string;
  pet: string;
  petname: string;

}
