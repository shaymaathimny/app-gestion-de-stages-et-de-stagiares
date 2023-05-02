import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encadreur } from '../../../modules/encadreur';
import { EncadreurService } from '../../../services/encadreur.service';

@Component({
  selector: 'app-ajoutencad',
  templateUrl: './ajoutencad.component.html',
  styleUrls: ['./ajoutencad.component.css']
  
})
export class AjoutencadComponent implements OnInit {
  path: string = "../assets/img/bg01.jpg";
  submitted = false;
  encadreur:Encadreur= new Encadreur();
  constructor(private encadService : EncadreurService, private router : Router) {}
  ngOnInit(): void {

  }
  ajoutencadreur(): void {
    if (!this.submitted)
  
    {
      this.encadService.ajouterEncadreur(this.encadreur)
        .subscribe({
          next: (res) => {
           // console.log(res);
           // this.submitted = true;
           this.navigate();
          },
         // error: (e) => console.error(e)
        });
    } }
    navigate(): void {
      this.router.navigate(["home/ListeEncadreur"])
     
     
    }
}

