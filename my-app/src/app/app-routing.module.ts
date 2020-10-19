import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MapaComponent} from './mapa/mapa.component'
import {HomeComponent} from './home/home.component'

const routes: Routes = [
  {path:'', component: HomeComponent},
  {path:'mapa', component: MapaComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
