import { Encadreur } from "./encadreur";
import { Stagiaire } from "./stagiaire";

export class StageInfoListing{
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
   stagiairefullnames! : string [];
   encadreurfullname! : string ;

  constructor(){this.stagiairefullnames=[] 
   
};
 
   
}
