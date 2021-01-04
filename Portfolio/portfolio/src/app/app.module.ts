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
import { SecurityJobsComponent } from './analyse_security_engineer/security-jobs/security-jobs.component';
import { GroupprojectComponent } from './groupproject/groupproject.component';
import { ProjectBedreigingComponent } from './project_components/project_analyse/project-bedreiging/project-bedreiging.component';
import { ProjectEthischComponent } from './project_components/project_analyse/project-ethisch/project-ethisch.component';
import { ProjectResearchDocumentsComponent } from './project_components/project_research/project-research-documents/project-research-documents.component';
import { ResearchBsnComponent } from './project_components/project_research/research-bsn/research-bsn.component';
import { RedvsblueComponent } from './analyse_security_engineer/redvsblue/redvsblue.component';
import { PersonalresearchComponent } from './personalresearch/personalresearch.component';
import { PersonalanalyseComponent } from './personalanalyse/personalanalyse.component';
import { LeerplanresearchComponent } from './leerplanresearch/leerplanresearch.component';
import { Leerontwikkelingpt1Component } from './analyse_security_engineer/leerontwikkelingpt1/leerontwikkelingpt1.component';
import { AuhtenticationComponent } from './analyse_security_engineer/auhtentication/auhtentication.component';
import { RsaComponent } from './analyse_security_engineer/rsa/rsa.component';
import { Redvsblue2Component } from './analyse_security_engineer/redvsblue2/redvsblue2.component'

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
    SecurityJobsComponent,
    GroupprojectComponent,
    ProjectBedreigingComponent,
    ProjectEthischComponent,
    ProjectResearchDocumentsComponent,
    ResearchBsnComponent,
    RedvsblueComponent,
    PersonalresearchComponent,
    PersonalanalyseComponent,
    LeerplanresearchComponent,
    Leerontwikkelingpt1Component,
    AuhtenticationComponent,
    RsaComponent,
    Redvsblue2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
