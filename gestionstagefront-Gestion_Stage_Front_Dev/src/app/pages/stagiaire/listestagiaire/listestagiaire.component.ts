import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from 'src/app/modules/stagiaire';
import Swal from 'sweetalert2';
import { StagiaireService } from '../../../services/servicestagiaire.service';
@Component({
  selector: 'app-listestagiaire',
  templateUrl: './listestagiaire.component.html',
  styleUrls: ['./listestagiaire.component.css']
})
export class ListestagiaireComponent implements OnInit {
 stagiaires:  Stagiaire[]=[];
 stagiaire: Stagiaire =new Stagiaire();

  constructor(private servicestager:StagiaireService , private route: ActivatedRoute,
    private router: Router) {
     
   }

  ngOnInit(): void {
    this.reloadData();
    
  }
  reloadData() {
    // this.stagiaire = this.stagiaireService.getstagiaireList();

    this.servicestager.getStagiaireList().subscribe(res=>{this.stagiaires=res 
},error=>{
      console.error(error)
      
    },()=>{

    });

  }
  
  ajoutstagiaire(){
    this.router.navigate(['home/ajoutstagiaire']);

  }
 StagiaireDelete(id:any){
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
        this.servicestager.deleteStagiaire(id)
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
    })
  }

 Modifstagiaire(id:any){
   // alert(id);
    this.router.navigate(['home/modifstagiaire'],{queryParams:{_id:id}});

  }
  stagiaireDetails(id: number){
    this.router.navigate(['home/detailstagiaire', id]);
    
  }
}
