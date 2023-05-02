import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadreur } from 'src/app/modules/encadreur';
import { EncadreurService } from 'src/app/services/encadreur.service';
import Swal from 'sweetalert2';
@Component({
  selector: 'app-listencadreur',
  templateUrl: './listencadr.component.html',
  styleUrls: ['./listencadr.component.css']
})
export class ListencadreurComponent implements OnInit {
  encadreure : Encadreur[]=[];
  encadreur: Encadreur =new Encadreur();
  constructor(private serEncadr: EncadreurService , private route: ActivatedRoute,
    private router: Router) {

     
   }


  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    // this.employees = this.employeeService.getEmployeesList();
    this.serEncadr.getEncadreurList()
    .subscribe(res=>{this.encadreure=res 

    },error=>{
      console.error(error)
      
    },()=>{

    });

  }
  ajoutencadreur(){
    this.router.navigate(['home/ajoutencadr']);

  }
  EncadDelete(id:any){
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
        this.serEncadr.deleteEncadreur(id)
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

  Modifencadreur(id:any){
    //alert(id);
    this.router.navigate(['home/modifencadr'],{queryParams:{_id:id}});

  }
    encadreurDetails(id: number){
    this.router.navigate(['home/detailencadreur', id]);
    
  }
}
