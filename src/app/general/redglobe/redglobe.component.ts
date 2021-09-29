import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-redglobe',
  templateUrl: './redglobe.component.html',
  styleUrls: ['./redglobe.component.css']
})
export class RedglobeComponent implements OnInit {

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
