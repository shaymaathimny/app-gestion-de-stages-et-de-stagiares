import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Recruteur } from 'src/app/modules/recruteur';
import { RecruteurService } from 'src/app/services/recruteur.service';

@Component({
  selector: 'app-ajoutrecruteur',
  templateUrl: './ajoutrecruteur.component.html',
  styleUrls: ['./ajoutrecruteur.component.css']
})
export class AjoutrecruteurComponent implements OnInit {
  submitted = false;
  recru:Recruteur= new Recruteur();

  constructor(private recruservice : RecruteurService, private router : Router) {}
  ngOnInit(): void {

  }
  ajoutrecruteur(): void {
    if (!this.submitted)
  
    {
      this.recruservice.ajouterRecruteur(this.recru)
        .subscribe({
          next: (res) => {
           // console.log(res);
            this.submitted = true;
            this.navigate();
          },
         // error: (e) => console.error(e)
        });
    } 
  }
    navigate(): void {
      this.router.navigate(["listerecruteur"])
     
     
    }
}
