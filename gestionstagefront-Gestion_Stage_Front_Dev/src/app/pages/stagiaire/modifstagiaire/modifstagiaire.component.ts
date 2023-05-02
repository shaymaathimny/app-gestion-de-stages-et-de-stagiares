import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from 'src/app/modules/stagiaire';
import { StagiaireService } from 'src/app/services/servicestagiaire.service';
@Component({
  selector: 'app-modifstagiaire',
  templateUrl: './modifstagiaire.component.html',
  styleUrls: ['./modifstagiaire.component.css']
})
export class ModifstagiaireComponent implements OnInit {

  idStager : any;
  submitted = false;
  stagiaire:Stagiaire= new Stagiaire();
  constructor(private stagerService : StagiaireService, private router : Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idStager=this.route.snapshot.queryParamMap.get('_id');
  this.stagerData(this.idStager);
  }
  stagerData(idStager:any) {
    //alert(this.idStager);
    this.stagerService.getStagiaire(idStager).subscribe(res=>{this.stagiaire=res 
console.log(this.stagiaire);
    },error=>{
      console.error(error)
      
    },()=>{
      this.stagiaire.datenaissance= new Date(this.stagiaire.datenaissance);

    });

  }

  Modifstagiaire(): void {
    if (!this.submitted)
      {
        
        this.stagerService.ajouterStagiaire(this.stagiaire)
          .subscribe({
            next: (res) => {
            // console.log(res);
              this.submitted = true;
            },
          // error: (e) => console.error(e)
          });
      } 
      
  }

    navigate(): void {
      this.router.navigate(["/home/listdstage"])

}}
