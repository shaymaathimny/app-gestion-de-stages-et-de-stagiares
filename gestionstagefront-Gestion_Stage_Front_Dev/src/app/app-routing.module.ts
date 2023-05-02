import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AjoutencadComponent } from './pages/encadreur/ajoutencad/ajoutencad.component';
import { ListestagiaireComponent } from './pages/stagiaire/listestagiaire/listestagiaire.component';
import { ModifencadrComponent } from './pages/encadreur/modifencadr/modifencadr.component';
import { AjoutstagerComponent } from './pages/stagiaire/ajoutstager/ajoutstager.component';
import { HomeComponent } from './home/home.component';
import { ModifstagiaireComponent } from './pages/stagiaire/modifstagiaire/modifstagiaire.component';
import { DetailencadComponent } from './detailencad/detailencad.component';
import { DetailstagiaireComponent } from './detailstagiaire/detailstagiaire.component';
import { ListrecruteurComponent } from './pages/recruteur/listrecruteur/listrecruteur.component';
import { AjoutrecruteurComponent } from './pages/recruteur/ajoutrecruteur/ajoutrecruteur.component';
import { AuthGuardService } from './services/guard/auth-guard.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AjoutstageComponent } from './pages/stage/ajoutstage/ajoutstage.component';
import { ListencadreurComponent } from './pages/encadreur/listencadreur/listencadr.component';
import { ListdstagesComponent } from './pages/stage/listdstages/listdstages.component';
import { ModifstageComponent } from './pages/stage/modifstage/modifstage.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DetailstageComponent } from './pages/stage/detailstage/detailstage.component';
import { PrincipaleComponent } from './principale/principale.component';




const routes: Routes = [

  {path:"principale",component:PrincipaleComponent,canActivate : [AuthGuardService]},

{path:"ajoutrecruteur",component:AjoutrecruteurComponent,canActivate : [AuthGuardService]},
{path:"listerecruteur",component:ListrecruteurComponent,canActivate : [AuthGuardService]},
{path :"",component:SidebarComponent,canActivate : [AuthGuardService]} ,
{path :"login",component:LoginComponent },{path :"register",component:RegisterComponent },
{path :"home",component:SidebarComponent,canActivate : [AuthGuardService],children:[
  {path :"listdstage",component:ListdstagesComponent,canActivate : [AuthGuardService]} ,
  {path:"liststgr",component:ListestagiaireComponent,canActivate : [AuthGuardService]},
  {path:"ListeEncadreur",component:ListencadreurComponent,canActivate : [AuthGuardService]},
  {path:"modifencadr",component:ModifencadrComponent,canActivate : [AuthGuardService]},
  {path:"detailencadreur/:id",component:DetailencadComponent,canActivate : [AuthGuardService]},
  {path:"ajoutencadr",component:AjoutencadComponent,canActivate : [AuthGuardService]},
  {path:"ajoutstagiaire",component:AjoutstagerComponent,canActivate : [AuthGuardService]},
  {path:"detailstagiaire/:id",component:DetailstagiaireComponent,canActivate : [AuthGuardService]},
  {path:"modifstagiaire",component:ModifstagiaireComponent,canActivate : [AuthGuardService]},
  {path:"Dashboard",component:HomeComponent,canActivate : [AuthGuardService]},
  {path:"detailstage/:id",component:DetailstageComponent,canActivate : [AuthGuardService]},
  {path :"ajoutstage",component:AjoutstageComponent,canActivate : [AuthGuardService]},
{path :"modifstage",component:ModifstageComponent,canActivate : [AuthGuardService]}

]}
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
