import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Recruteur } from 'src/app/modules/recruteur';
import { RecruteurService } from 'src/app/services/recruteur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listrecruteur',
  templateUrl: './listrecruteur.component.html',
  styleUrls: ['./listrecruteur.component.css']
})
export class ListrecruteurComponent implements OnInit {
  recruteurs:  Recruteur[]=[];
  recruteur:Recruteur =new Recruteur();
  constructor(private servicerecru:RecruteurService , private route: ActivatedRoute,
    private router: Router) {
     /*| date:"yyyy/MM/dd"*/ 
     /*<button (click)="ajoutrecruteur()" class="btn btn-info" style="margin-left: 10px">ajouter</button>*/
     
   }

  ngOnInit(): void {
    this.reloadData();
    
  }
  reloadData() {
    // this.recruteur = this.recruteurService.getrecruteurList();

    this.servicerecru.getRecruteurList().subscribe(res=>{this.recruteurs=res 
},error=>{
      console.error(error)
      
    },()=>{

    });

  }
  
  ajoutrecruteur(){
    this.router.navigate(['ajoutrecruteur']);

  }
 /*StagiaireDelete(id:any){
    Swal.fire({
      title: 'Are you sure?',
      text: 'You will not be able to recover this imaginary file!',
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Yes, delete it!',
      cancelButtonText: 'No, keep it'
    }).then((result) => {
      if (result.value) {
       // alert(id);
        this.servicerecru.deleteRecruteur(id)
        .subscribe(res=>{
          this.reloadData();
        })
      Swal.fire(
        'Deleted!',
        'Your imaginary file has been deleted.',
        'success'
      )
   
      } else if (result.dismiss === Swal.DismissReason.cancel) {
      Swal.fire(
        'Cancelled',
        'Your imaginary file is safe 🙂',
        'error'
      )
      }
    })*/
  }

 /*Modifstagiaire(id:any){
   // alert(id);
    this.router.navigate(['modifRecruteur'],{queryParams:{_id:id}});

  
  RecruteurDetails(id: number){
    this.router.navigate(['detailrecruteur', id]);
    
  }*/


