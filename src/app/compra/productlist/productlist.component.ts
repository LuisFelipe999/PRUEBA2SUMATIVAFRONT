import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
//import { Component, Input } from '@angular/core';
@Component({
  selector: 'productlist',
  template: './productlist.component.html'
  
  
  
  
})
export class ProductlistComponent  {
  @Input()
  products: any[] = [];
  @Output() productAdded = new EventEmitter();
  addProductToCart(products:any) {
    this.productAdded.emit(products);
    
}
}


