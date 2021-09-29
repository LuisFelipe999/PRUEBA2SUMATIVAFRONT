import { Component, Input,Output,EventEmitter } from '@angular/core';
@Component({
  selector: 'product',
  template: './product.component'
  
  
  
})
export class ProductComponent  {
  @Input() product: any;
  @Output() productAdded = new EventEmitter();
  addProductToCart(product: any) {
    this.productAdded.emit(product);
    
    
    
}
// also lets modify the template of
// parent "ProductList" to use "product"
  
}

