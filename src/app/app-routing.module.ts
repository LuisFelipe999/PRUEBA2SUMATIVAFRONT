import { NgModule, Component } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AsideComponent } from './compartida/aside/aside.component';
import { PrincipalComponent } from './general/principal/principal.component';
import { FormularioComponent } from './general/formulario/formulario.component'; 
import { MenuComponent } from './general/menu/menu.component'; 
import { PaginaComponent } from './enconstruccion/pagina/pagina.component';
import { RegistroComponent } from './general/registro/registro.component';
import { InicioComponent } from './compartida/inicio/inicio.component';
import { PruebaComponent } from './general/prueba/prueba.component';
import { UvasdemesaComponent } from './muestas/uvasdemesa/uvasdemesa.component';
import { ProductoComponent } from './general/producto/producto.component';
import { ProductlistComponent } from './compra/productlist/productlist.component';
import { ProductComponent } from './compra/product/product.component';
import { CrimsonComponent } from './general/crimson/crimson.component'; 
import { ThompsonComponent } from './general/thompson/thompson.component';
import { RedglobeComponent } from './general/redglobe/redglobe.component';


const routes: Routes = [ 
{path:'principal', component: PrincipalComponent},
{path:'Aside', component: AsideComponent},
{path:'inicio', component: InicioComponent}, 
{path:'formulario', component: FormularioComponent},
{path:'menu',component: MenuComponent}, 
{path:'pagina',component: PaginaComponent}, 
{path:'registro',component: RegistroComponent},
{path:'prueba',component:PruebaComponent},
{path:'uvasdemesa',component:UvasdemesaComponent},
{path:'producto',component:ProductoComponent}, 
{path: 'productlist',component:ProductlistComponent},
{path:'product',component:ProductComponent},
{path:'crimson',component:CrimsonComponent}, 
{path:'thompson',component:ThompsonComponent},
{path:'redglobe',component:RedglobeComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
