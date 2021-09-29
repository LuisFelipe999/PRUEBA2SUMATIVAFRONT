import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Producto } from '../interfaces/producto'; 


@Injectable({
  providedIn: 'root'
})
export class ProductoService {

productos: Producto[]=[]; 
 

  constructor(private http:HttpClient) {
    console.log("Producto Service");
    this.cargarProducto(); 

   } 

   public cargarProducto(){
console.log("cargar categoria"); 
this.http.get("assets/data/productos.json").subscribe((respuesta:Producto|any) => {
this.productos=respuesta.productos;

});
//console.log(this.producto['productos']); 




   } 

 //  getProducto():Observable<Producto[]>{
//return this.http.getget<Producto[]>(this.url);

  // }
}
