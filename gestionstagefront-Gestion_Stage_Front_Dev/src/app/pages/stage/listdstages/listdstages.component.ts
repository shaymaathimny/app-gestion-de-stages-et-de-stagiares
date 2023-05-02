import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stage } from 'src/app/modules/stage';
import {  StageInfoListing } from 'src/app/modules/stageInfoListing';
import { StageInfo } from 'src/app/modules/stageinfo';
import { StageService } from 'src/app/services/stage.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listdstages',
  templateUrl: './listdstages.component.html',
  styleUrls: ['./listdstages.component.css']
})
export class ListdstagesComponent implements OnInit {
  pathiconEnc: string = "../assets/img/avatar5.png";
  pathiconStgr: string = "../assets/img/avatar4.png";
  [x: string]: any;

 stages:  Stage[]=[];
 stageList:  StageInfoListing[]=[];
 stage:Stage =new Stage();
  constructor(private servicestage:StageService , private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.reloadData();
  }
  reloadData() {
    // this.recruteur = this.recruteurService.getrecruteurList();

    this.servicestage.getStageList().subscribe(res=>{this.stageList=res 
},error=>{
      console.error(error)
      
    },()=>{

    });

  }

  StageDelete(id:any){
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
        this.servicestage.deleteStage(id)
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
  
  ajoutstage(){
    this.router.navigate(['home/ajoutstage']);

  }
  Modifstage(id:any){
    //alert(id);
    this.router.navigate(['home/modifstage'],{queryParams:{_id:id}});

  }

  stageDetails(id: number){
    this.router.navigate(['home/detailstage', id]);
    
  }

}
