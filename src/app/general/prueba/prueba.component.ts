import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common'; 
import { Validators } from '@angular/forms';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

Fecha: number= new Date().getTime();
Fecha2: string = formatDate(new Date(), 'dd/MM/yyyy', 'en'); 
Fecha3: string =new Date().toString();
Mes: number= new Date().getMonth();
dia: number |null|string=null; 

id:number|any;
valor:number|any; 
carrito_compras:string[]=["REDGLOBE","THOMPSON","CRIMSON"]  
total:number|any; 





contador:number=0;
dias_semana:string[]=["Domingo", "Lunes", "Miercoles", "Jueves", "Viernes", "Sabado"]; 

email: string|null =null;
password: string|null=""; 



  constructor() { 
    console.log("Constructor Purebas");
  }

  agregarCarrito(id:number|any,valor:number|any):void{
    this.total=this.total +valor; 
    this.carrito_compras.push(id); 
    
    } 

    getId(){
      this.id.push();
    } 

    getvalor(){
      this.valor.push(); 

    }

  ngOnInit(): void { 
    console.log("ngOnInit Pruebas");
  }


  //get 
get mes():number {
  return this.Mes;
}

obtenerMes(){
  return this.Mes;
}

obtenerDia(): void {
  this.dia=new Date().getDay();
}

sumar(): void {
this.contador++;

} 

restar():void {
  this.contador--; 
}

eliminar(): void { 
  this.dias_semana.pop();
} 

agregar(): void { 
  this.dias_semana.push();
} 

insertar(): void{
console.log("metodo insertar");

} 
insertar2(event:any): void{
  console.log("metodo insertar 2");
  console.log(event);
  }
}
 





