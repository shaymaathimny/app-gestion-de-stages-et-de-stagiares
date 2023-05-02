import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Encadreur } from '../../../modules/encadreur';
import { EncadreurService } from '../../../services/encadreur.service';

@Component({
  selector: 'app-ajoutencadreur',
  templateUrl: './ajoutencadreur.component.html',
  styleUrls: ['./ajoutencadreur.component.css']
  
})
export class AjoutencadComponent implements OnInit {
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
            this.submitted = true;
          },
         // error: (e) => console.error(e)
        });
    } }
    navigate(): void {
      this.router.navigate([""])
     
     
    }
}

