import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadreur } from '../../../modules/encadreur';
import { EncadreurService } from '../../../services/encadreur.service';

@Component({
  selector: 'app-modifencadr',
  templateUrl: './modifencadr.component.html',
  styleUrls: ['./modifencadr.component.css']
})
export class ModifencadrComponent implements OnInit {
  path: string = "../assets/img/bg01.jpg";
  idEncad : any;
  submitted = false;
  encadreur:Encadreur= new Encadreur();
  constructor(private encadService : EncadreurService, private router : Router, private route: ActivatedRoute) {}

  ngOnInit(): void {
    this.idEncad=this.route.snapshot.queryParamMap.get('_id');
  this.encadData(this.idEncad);
  }
  encadData(idEncad:any) {
    //alert(this.idEncad);
    this.encadService.getEncadreur(idEncad).subscribe(res=>{this.encadreur=res 

    },error=>{
      console.error(error)
      
    },()=>{

    });

  }

  Modifencadreur(): void {
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
      } 
  }

    navigate(): void {
      this.router.navigate(["home/ListeEncadreur"])
    }


}
