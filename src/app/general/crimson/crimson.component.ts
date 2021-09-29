import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-crimson',
  templateUrl: './crimson.component.html',
  styleUrls: ['./crimson.component.css']
})
export class CrimsonComponent implements OnInit {

  
  
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
    this.variedad.push("crimson");
    this.contador++; 
    this.inventario--; 
    
  
  }  


}
