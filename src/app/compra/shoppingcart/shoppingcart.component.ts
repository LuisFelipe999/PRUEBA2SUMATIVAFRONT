import { Component, OnInit,Input } from '@angular/core';
//import { Component, Input } from '@angular/core';
@Component({
  selector: 'shoppingcart',
  template: `
  <h1>Shopping Cart</h1>
  <div *ngFor="let product of products">{{product.name}}<div>
  `,
  styles: [`:host{border: 1px solid #000;}`]
})
export class ShoppingcartComponent  {
  @Input()
  products: any[] = [];
}
