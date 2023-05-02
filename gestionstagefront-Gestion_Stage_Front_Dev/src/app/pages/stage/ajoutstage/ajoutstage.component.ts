import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { Encadreur } from 'src/app/modules/encadreur';
import { LabelValu } from 'src/app/modules/labelValu';
import { Stage } from 'src/app/modules/stage';
import { StageInfo } from 'src/app/modules/stageinfo';
import { Stagiaire } from 'src/app/modules/stagiaire';
import { EncadreurService } from 'src/app/services/encadreur.service';
import { StagiaireService } from 'src/app/services/servicestagiaire.service';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-ajoutstage',
  templateUrl: './ajoutstage.component.html',
  styleUrls: ['./ajoutstage.component.css']
})
export class AjoutstageComponent implements OnInit {
  path: string = "../assets/img/bg01.jpg";
  submitted = false;
 stage :StageInfo= new StageInfo();
 encadreure : Encadreur[]=[];
 labelValu : LabelValu []=[];
 
  
  


    constructor(private stageservice : StageService, private router : Router,private serEncadr: EncadreurService,private servicestager:StagiaireService) {
      
    }
  ngOnInit(): void {
   this.stage.encadreur.id =-1;
this.listencadr();
this. listestagiaire();

  }
 listestagiaire() {
   //this.stagiaire = this.stagiaireService.getstagiaireList();

    this.servicestager.getStagiaireListDto().subscribe(res=>{this.labelValu=res 
},error=>{
      console.error(error)
      
    },()=>{

    });

  }
  listencadr() {
    // this.employees = this.employeeService.getEmployeesList();
    this.serEncadr.getEncadreurList()
    .subscribe(res=>{this.encadreure=res 

    },error=>{
      console.error(error)
      
    },()=>{

    });

  }
  ajoutstage(): void {
    
    if (this.stage.encadreur.id!=-1 && !this.submitted)
  
    {console.log(this.stage)
    this.stageservice.ajouterStage(this.stage)
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
    this.router.navigate(["home/listdstage"])
   
   
  }
  
}
