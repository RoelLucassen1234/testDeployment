import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { LeerplanningComponent } from './leerplanning/leerplanning.component';
import { SecurityportfolioComponent } from './securityportfolio/securityportfolio.component';
import { SEworkshopComponent } from './seworkshop/seworkshop.component';
import { XssAnalyseComponent } from './analyse_security_engineer/xss/xss-analyse.component';
import { ApplicatieAnalyseComponent } from './analyse_security_engineer/applicatie-analyse/analyse_aplicatie/applicatie-analyse.component';
import { LoggingComponent } from './analyse_security_engineer/logging/logging.component';
import { SecurityPrinciplesComponent } from './analyse_security_engineer/applicatie-analyse/security-principles/security-principles.component';
import { FuzzyTestingComponent } from './analyse_security_engineer/fuzzy-testing/fuzzy-testing.component';
import { SecurityJobsComponent } from './analyse_security_engineer/security-jobs/security-jobs.component'

@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    LeerplanningComponent,
    SecurityportfolioComponent,
    SEworkshopComponent,
    ApplicatieAnalyseComponent,
    XssAnalyseComponent,
    LoggingComponent,
    SecurityPrinciplesComponent,
    FuzzyTestingComponent,
    SecurityJobsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
