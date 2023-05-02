import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';

import { Stagiaire } from '../../../modules/stagiaire';
import { StagiaireService} from '../../../services/servicestagiaire.service';
@Component({
  selector: 'app-ajoutstager',
  templateUrl: './ajoutstager.component.html',
  styleUrls: ['./ajoutstager.component.css']
})
export class AjoutstagerComponent implements OnInit {
  path: string = "../assets/img/bg01.jpg";
  submitted = false;
 
  stager:Stagiaire= new Stagiaire();
 
 
  constructor(private stagerservice : StagiaireService, private router : Router) {}
  ngOnInit(): void {
    
   
   

  }
  ajoutstagiaire(): void {
    if (!this.submitted)
  
    {
      console.log(this.stager);
      this.stagerservice.ajouterStagiaire(this.stager)
        .subscribe({
          next: (res) => {
           console.log(res);
            this.submitted = true;
            this.navigate();
          },
         // error: (e) => console.error(e)
        });
    } 
  }
    navigate(): void {
      this.router.navigate(["home/liststgr"])
     
     
    }
    
  
}
