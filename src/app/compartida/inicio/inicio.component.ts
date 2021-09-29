import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  email: string|null = null;
  password: string|null = "";

  constructor() { }

  ngOnInit(): void {
  } 

  insertar():void{


    console.log(this.email, this.password);

  }


}
