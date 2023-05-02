import { Encadreur } from "./encadreur";
import { Stagiaire } from "./stagiaire";

export class StageInformations {
  id ! : number;
   titreStage  !:string;
   typeStage !:string;
   dateDebutStage !:Date;
   dateFinStage ! :Date;
   duree !:string;
   description !: string;
   attestation !:boolean;
   pdf !:string;
   nomService ! :string;
   stagiaireIds! : number [];
   stagiairefullnames!:string[];
   encadreurId! : number ;
   encadreurfullname!:string ;
  constructor(){
    this.stagiaireIds=[] ;
    this.stagiairefullnames = [];
   
};
 
   
}
