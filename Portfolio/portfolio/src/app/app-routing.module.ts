import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {MainPageComponent} from './main-page/main-page.component';
import { LeerplanningComponent } from './leerplanning/leerplanning.component'
import {SecurityportfolioComponent} from './securityportfolio/securityportfolio.component'
import {SEworkshopComponent} from './seworkshop/seworkshop.component'
import { ApplicatieAnalyseComponent } from './analyse_security_engineer/applicatie-analyse/analyse_aplicatie/applicatie-analyse.component';
import { XssAnalyseComponent } from './analyse_security_engineer/xss/xss-analyse.component';
import { LoggingComponent } from './analyse_security_engineer/logging/logging.component';
import { SecurityPrinciplesComponent } from './analyse_security_engineer/applicatie-analyse/security-principles/security-principles.component';
import { FuzzyTestingComponent } from './analyse_security_engineer/fuzzy-testing/fuzzy-testing.component';
import { SecurityJobsComponent } from './analyse_security_engineer/security-jobs/security-jobs.component';
import { GroupprojectComponent } from './groupproject/groupproject.component';
import { ProjectAnalyseDocumentsComponent } from './project_components/project_analyse/project-analyse-documents/project-analyse-documents.component';
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
import { Redvsblue2Component } from './analyse_security_engineer/redvsblue2/redvsblue2.component';
import { RandDProjectComponent } from './rand-dproject/rand-dproject.component';
import { RollenComponent } from './rollen/rollen.component';
import { PeerReviewComponent } from './peer-review/peer-review.component';

const routes: Routes = [
  {path: '' , redirectTo: '/main', pathMatch: 'full'},
  {path: 'main' , component: MainPageComponent},
  {path: 'leerplanning', component : LeerplanningComponent},
  {path: 'secureportfolio', component : SecurityportfolioComponent},
  {path: 'seworkshop', component : SEworkshopComponent},
  {path: 'analyse', component : ApplicatieAnalyseComponent},
  {path: 'xss', component : XssAnalyseComponent},
  {path: 'logging', component : LoggingComponent},
  {path: 'principles', component : SecurityPrinciplesComponent},
  {path: 'fuzzy', component : FuzzyTestingComponent},
  {path: 'jobs', component : SecurityJobsComponent},
  {path: 'groupportfolio', component : GroupprojectComponent},
  {path: 'groupanalyse', component : ProjectAnalyseDocumentsComponent},
  {path: 'groupbedreiginganalyse', component : ProjectBedreigingComponent},
  {path: 'ethischeanalyse', component : ProjectEthischComponent},
  {path: 'groupanalyse', component : ProjectAnalyseDocumentsComponent},
  {path: 'groupresearch', component : ProjectResearchDocumentsComponent},
  {path: 'bsnresearch', component : ResearchBsnComponent},
  {path: 'redblue1', component : RedvsblueComponent},
  {path: 'redblue2', component : Redvsblue2Component},
  {path: 'personalresearch', component : PersonalresearchComponent},
  {path: 'personalanalyse', component : PersonalanalyseComponent},
  {path: 'personalleerplanning', component : LeerplanresearchComponent},
  {path: 'ontwikkeling1', component : Leerontwikkelingpt1Component},
  {path: 'implementatie', component : AuhtenticationComponent},
  {path: 'rdproject', component : RandDProjectComponent},
  {path: 'rollen', component : RollenComponent},
  {path: 'peerreview', component : PeerReviewComponent},
  {path: 'rsa', component : RsaComponent}

  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
