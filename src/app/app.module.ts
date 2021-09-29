import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './compartida/header/header.component';
import { ComponentNameComponent } from './component-name/component-name.component';
import { FooterComponent } from './compartida/footer/footer.component';
import { AsideComponent } from './compartida/aside/aside.component';
import { BodyComponent } from './compartida/body/body.component';
import { ScriptComponent } from './compartida/script/script.component';
import { PrincipalComponent } from './general/principal/principal.component';
import { MenuComponent } from './general/menu/menu.component';
import { FormularioComponent } from './general/formulario/formulario.component';
import { RegistroComponent } from './general/registro/registro.component';
import { InicioComponent } from './compartida/inicio/inicio.component';
import { PaginaComponent } from './enconstruccion/pagina/pagina.component';
import { PruebaComponent } from './general/prueba/prueba.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { UvasdemesaComponent } from './muestas/uvasdemesa/uvasdemesa.component';
import { ProductoComponent } from './general/producto/producto.component';
import { ProductlistComponent } from './compra/productlist/productlist.component';
import {ShoppingcartComponent}  from './compra/shoppingcart/shoppingcart.component';
import { ProductComponent } from './compras/product/product.component';
import { ThompsonComponent } from './general/thompson/thompson.component';
import { RedglobeComponent } from './general/redglobe/redglobe.component';
import { CrimsonComponent } from './general/crimson/crimson.component';


@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ComponentNameComponent,
    FooterComponent,
    AsideComponent,
    BodyComponent,
    ScriptComponent,
    PrincipalComponent,
    MenuComponent,
    FormularioComponent,
    RegistroComponent,
    InicioComponent,
    PaginaComponent,
    PruebaComponent,
    UvasdemesaComponent,
    ProductoComponent,
    ProductlistComponent, 
    ShoppingcartComponent, ProductComponent, ThompsonComponent, RedglobeComponent, CrimsonComponent,
    
  ],

  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule, 
    HttpClientModule,
    BrowserModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent,ProductlistComponent] 
})
export class AppModule { }
