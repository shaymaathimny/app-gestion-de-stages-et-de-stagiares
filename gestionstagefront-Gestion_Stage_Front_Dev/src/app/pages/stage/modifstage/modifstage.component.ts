import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadreur } from 'src/app/modules/encadreur';
import { LabelValu } from 'src/app/modules/labelValu';

import { StageInfo } from 'src/app/modules/stageinfo';
import { StageInformations } from 'src/app/modules/stageInformations';
import { EncadreurService } from 'src/app/services/encadreur.service';
import { StagiaireService } from 'src/app/services/servicestagiaire.service';
import { StageService } from 'src/app/services/stage.service';

@Component({
  selector: 'app-modifstage',
  templateUrl: './modifstage.component.html',
  styleUrls: ['./modifstage.component.css']
})
export class ModifstageComponent implements OnInit {
  idStag : any;
  submitted = false;
 stage:StageInfo= new StageInfo();
 encadreure : Encadreur[]=[];
 labelValu : LabelValu []=[];
 voirStage: StageInformations  = new StageInformations();
 constructor(private stageservice : StageService, private router : Router, private route: ActivatedRoute,private serEncadr: EncadreurService,private servicestager:StagiaireService) {}



 ngOnInit(): void {
  this.stage.encadreur.id =-1;
this.listencadr();
this. listestagiaire();
  this.idStag=this.route.snapshot.queryParamMap.get('_id');
this.stagData(this.idStag);
}
stagData(idStag:any) {
  //alert(this.idEncad);
  
  this.stageservice.getStageInfo(idStag).subscribe(res=>{this.voirStage=res 
    
  },error=>{
    console.error(error)
    
  },()=>{
    //this.stage.encadreur.id = this.encadreure.find(elem => elem.id == this.voirStage.encadreurId)?.id   as number;
    //this.stage.stagiaireIds = this.voirStage.stagiaireIds;
    this.stage.attestation = this.voirStage.attestation;
    this.stage.dateDebutStage = this.voirStage.dateDebutStage;

    this.stage.dateFinStage = this.voirStage.dateFinStage;
    this.stage.description = this.voirStage.description;
    this.stage.duree = this.voirStage.description;
    this.stage.id = this.voirStage.id;
    this.stage.nomService = this.voirStage.nomService;
    this.stage.pdf = this.voirStage.pdf;
    this.stage.titreStage = this.voirStage.titreStage;
    this.stage.typeStage = this.voirStage.typeStage;

  });

}

listestagiaire() {
  

   this.servicestager.getStagiaireListDto().subscribe(res=>{
    
    this.labelValu=res 
},error=>{
     console.error(error)
     
   },()=>{

   });

 }
 listencadr() {
  
   this.serEncadr.getEncadreurList()
   .subscribe(res=>{this.encadreure=res 

   },error=>{
     console.error(error)
     
   },()=>{

   });

 }
Modifstage(): void {
  console.log("test");
  if (!this.submitted)
    {
      console.log("data " , this.stage)
      this.stageservice.ajouterStage(this.stage)
        .subscribe({
          next: (res) => {
           console.log(res);
            this.submitted = true;
          },
         error: (e) => console.error(e)
        });
    } 
}

  navigate(): void {
    this.router.navigate(["/home/listdstage"])
  }

}

