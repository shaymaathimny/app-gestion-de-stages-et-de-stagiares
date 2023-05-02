import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Stagiaire } from '../modules/stagiaire';
import { EncadreurService } from '../services/encadreur.service';
import { StagiaireService } from '../services/servicestagiaire.service';

@Component({
  selector: 'app-detailstagiaire',
  templateUrl: './detailstagiaire.component.html',
  styleUrls: ['./detailstagiaire.component.css']
})
export class DetailstagiaireComponent implements OnInit {
  @Input() viewMode = false;
  @Input()
  currentStagiaire: Stagiaire  = new Stagiaire()
  constructor(private route: ActivatedRoute,private router: Router,
    private stagiaireService: StagiaireService) { }

  ngOnInit(): void {
    this.encadreurdetail(this.route.snapshot.params['id']);
  }
  encadreurdetail(id: number): void {
    this.stagiaireService.getStagiaire(id)
      .subscribe({
        next: (data) => {
          this.currentStagiaire = data;
           console.log("TESTTTT");
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  list(){
    this.router.navigate(["home/liststgr"]);
  }
}
