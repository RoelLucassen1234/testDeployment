import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import { LeerplanningComponent } from './leerplanning/leerplanning.component'
import {SecurityportfolioComponent} from './securityportfolio/securityportfolio.component'
import {SEworkshopComponent} from './seworkshop/seworkshop.component'
import { ApplicatieAnalyseComponent } from './analyse_security_engineer/applicatie-analyse/analyse_aplicatie/applicatie-analyse.component';
import { XssAnalyseComponent } from './analyse_security_engineer/xss/xss-analyse.component';
import { LoggingComponent } from './analyse_security_engineer/logging/logging.component';

const routes: Routes = [
  {path: '' , redirectTo: '/main', pathMatch: 'full'},
  {path: 'main' , component: MainPageComponent},
  {path: 'leerplanning', component : LeerplanningComponent},
  {path: 'secureportfolio', component : SecurityportfolioComponent},
  {path: 'seworkshop', component : SEworkshopComponent},
  {path: 'analyse', component : ApplicatieAnalyseComponent},
  {path: 'xss', component : XssAnalyseComponent},
  {path: 'logging', component : LoggingComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
