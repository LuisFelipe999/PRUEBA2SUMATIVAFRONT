import { Component } from '@angular/core';
import {CategoriaService} from './services/categoria.service'; 
import {ProductoService} from './services/producto.service'; 



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularPrimeraPrueba';
  productList=[ 
   
  ] 

  cartProductList=[];

  constructor (public productoService:ProductoService,public categoriaService:CategoriaService) {


  } 



 
}
