import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import { LeerplanningComponent } from './leerplanning/leerplanning.component'
import {SecurityportfolioComponent} from './securityportfolio/securityportfolio.component'
import {SEworkshopComponent} from './seworkshop/seworkshop.component'

const routes: Routes = [
  {path: '' , redirectTo: '/main', pathMatch: 'full'},
  {path: 'main' , component: MainPageComponent},
  {path: 'leerplanning', component : LeerplanningComponent},
  {path: 'secureportfolio', component : SecurityportfolioComponent},
  {path: 'seworkshop', component : SEworkshopComponent}
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
