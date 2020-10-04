import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LeerplanningComponent } from './leerplanning/leerplanning.component';
import { SecurityportfolioComponent } from './securityportfolio/securityportfolio.component';
import { SEworkshopComponent } from './seworkshop/seworkshop.component';
import { ApplicatieAnalyseComponent } from './analyse_security_engineer/applicatie-analyse/applicatie-analyse.component';

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LeerplanningComponent,
    SecurityportfolioComponent,
    SEworkshopComponent,
    ApplicatieAnalyseComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
