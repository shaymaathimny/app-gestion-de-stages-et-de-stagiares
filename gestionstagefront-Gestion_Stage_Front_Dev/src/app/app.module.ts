import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import {MultiSelectModule} from 'primeng/multiselect';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AjoutencadComponent } from './pages/encadreur/ajoutencad/ajoutencad.component';
import { FormsModule } from '@angular/forms';
import { ModifencadrComponent } from './pages/encadreur/modifencadr/modifencadr.component';
import { ListestagiaireComponent } from './pages/stagiaire/listestagiaire/listestagiaire.component';
import { AjoutstagerComponent } from './pages/stagiaire/ajoutstager/ajoutstager.component';
import { HeaderComponent } from './header/header.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { HomeComponent } from './home/home.component';
import { ModifstagiaireComponent } from './pages/stagiaire/modifstagiaire/modifstagiaire.component';
import { DetailencadComponent } from './detailencad/detailencad.component';
import { DetailstagiaireComponent } from './detailstagiaire/detailstagiaire.component';
import { AjoutrecruteurComponent } from './pages/recruteur/ajoutrecruteur/ajoutrecruteur.component';
import { AuthIntercepterService } from './services/intercepter/auth-intercepter.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { AjoutstageComponent } from './pages/stage/ajoutstage/ajoutstage.component';
import { ListencadreurComponent } from './pages/encadreur/listencadreur/listencadr.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ListdstagesComponent } from './pages/stage/listdstages/listdstages.component';
import { ModifstageComponent } from './pages/stage/modifstage/modifstage.component';
import { DetailstageComponent } from './pages/stage/detailstage/detailstage.component';
import { PrincipaleComponent } from './principale/principale.component';


@NgModule({
  declarations: [

    AppComponent,
    ListencadreurComponent,
    AjoutencadComponent,
    ModifencadrComponent,
    ModifstagiaireComponent,
    ListestagiaireComponent,
    AjoutstagerComponent,
    HeaderComponent,
    SidebarComponent,
    HomeComponent,
    DetailencadComponent,
    DetailstagiaireComponent,
    AjoutrecruteurComponent,
    LoginComponent,
    RegisterComponent,
    AjoutstageComponent,
    ListdstagesComponent,
    ModifstageComponent,
    DetailstageComponent,
    PrincipaleComponent
  ],
  imports: [
    HttpClientModule,
    FormsModule,

    BrowserModule,
    AppRoutingModule,
    MultiSelectModule,
BrowserAnimationsModule

  ],
  providers: [{provide :HTTP_INTERCEPTORS, useClass:AuthIntercepterService,multi :true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
