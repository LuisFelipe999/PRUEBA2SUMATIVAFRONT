import { Component, OnInit } from '@angular/core';
import { ProductoService } from '../../services/producto.service';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-producto',
  templateUrl: './producto.component.html',
  styleUrls: ['./producto.component.css']
})
export class ProductoComponent implements OnInit {

  
  inventario1:number=1000;  
  contador1:number=0;
  variedad1:string[]=[]; 
  precio1:number=2000; 
  
  inventario2:number=1000;  
  contador2:number=0;
  variedad2:string[]=[]; 
  precio2:number=2000; 

  inventario3:number=1000;  
  contador3:number=0;
  variedad3:string[]=[]; 
  precio3:number=2000; 
  
  constructor(public productoService: ProductoService) { 


   }

  ngOnInit(): void { 


  } 

  eliminarCrimson(): void { 
    this.variedad1.pop(); 
    this.contador1--; 
    this.inventario1++; 
     
  } 
  
  agregarCrimson(): void { 
    this.variedad1.push("crimson");
    this.contador1++; 
    this.inventario1--; 
  }
    eliminarRedglobe(): void { 
      this.variedad2.pop(); 
      this.contador2--; 
      this.inventario2++; 
       
    } 
    
    agregarRedglobe(): void { 
      this.variedad2.push("redglobe");
      this.contador2++; 
      this.inventario2--;  

} 

eliminarThompson(): void { 
  this.variedad3.pop(); 
  this.contador3--; 
  this.inventario3++; 
   
} 

agregarThompson(): void { 
  this.variedad3.push("thompson");
  this.contador3++; 
  this.inventario3--;  

} 


  }

