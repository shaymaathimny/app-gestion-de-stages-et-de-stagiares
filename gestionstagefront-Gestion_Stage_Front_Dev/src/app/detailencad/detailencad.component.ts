import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Encadreur } from '../modules/encadreur';
import { EncadreurService } from '../services/encadreur.service';

@Component({
  selector: 'app-detailencad',
  templateUrl: './detailencad.component.html',
  styleUrls: ['./detailencad.component.css']
})
export class DetailencadComponent implements OnInit {
  pathiconProfile: string = "../assets/img/user8.jpg";
  @Input() viewMode = false;
  @Input()
   currentEncadreur: Encadreur  = new Encadreur()

  constructor(private route: ActivatedRoute,private router: Router,
    private encadreurService: EncadreurService) { }

  ngOnInit(): void {
    this.encadreurdetail(this.route.snapshot.params['id']);
    
  }
  encadreurdetail(id: number): void {
    this.encadreurService.getEncadreur(id)
      .subscribe({
        next: (data) => {
          this.currentEncadreur = data;
           console.log("TESTTTT");
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  list(){
    this.router.navigate(["home/ListeEncadreur"]);
  }
  Modifencadreur(id:any){
    //alert(id);
    this.router.navigate(['home/modifencadr'],{queryParams:{_id:id}});

  }
}
