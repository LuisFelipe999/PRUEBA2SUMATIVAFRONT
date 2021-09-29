
import { Component, OnInit } from '@angular/core';
import { formatDate } from '@angular/common';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {
  eliminado: number|null|string|undefined=null;

//variables registro
nombre:string|null="";
apellido:string|null="";
email:string|null=null;
password:string|null="";


  constructor() { }

  ngOnInit(): void {
  }

  insertar():void{
    if(this.nombre?.length==20 && this.apellido?.length==20){
      console.log(" funciona");

    }
  console.log("metodo insertar1");
  console.log(this.nombre +" "+this.apellido+" "+this.email +" "+ this.password);
  
  }



}