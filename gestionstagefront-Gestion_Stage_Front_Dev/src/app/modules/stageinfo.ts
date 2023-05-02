import { Encadreur } from "./encadreur";
import { Stagiaire } from "./stagiaire";

export class StageInfo {

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
   encadreur! : Encadreur ;

  constructor(){this.stagiaireIds=[] 
   this.encadreur= new Encadreur()
};
 
   
}
