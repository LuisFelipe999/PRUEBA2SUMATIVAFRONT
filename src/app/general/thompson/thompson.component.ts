import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-thompson',
  templateUrl: './thompson.component.html',
  styleUrls: ['./thompson.component.css']
})
export class ThompsonComponent implements OnInit {

  
  inventario:number=1000;  
  contador:number=0;
  variedad:string[]=[]; 
  precio:number=2000;

  constructor() { }

  ngOnInit(): void {
  } 

  eliminar(): void { 
    this.variedad.pop(); 
    this.contador--; 
    this.inventario++; 
  } 
  
  agregar(): void { 
    this.variedad.push("thompson");
    this.contador++; 
    this.inventario--; 
  } 



  

}
