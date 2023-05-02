import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { StageInfoListing } from 'src/app/modules/stageInfoListing';
import { StageInformations } from 'src/app/modules/stageInformations';
import { Stage } from '../../../modules/stage';
import { StageService } from '../../../services/stage.service';

@Component({
  selector: 'app-detailstage',
  templateUrl: './detailstage.component.html',
  styleUrls: ['./detailstage.component.css']
})
export class DetailstageComponent implements OnInit {
  @Input() viewMode = false;
  @Input()
   currentStage: StageInformations  = new StageInformations()

  constructor(private route: ActivatedRoute,private router: Router,
    private stageService: StageService) { }

  ngOnInit(): void {
    this.stagedetail(this.route.snapshot.params['id']);

  }
  stagedetail(id: number): void {
    this.stageService.getStageInfo(id)
      .subscribe({
        next: (data) => {
          this.currentStage = data;
           console.log("TESTTTT");
          console.log(data);
        },
        error: (e) => console.error(e)
      });
  }
  list(){
    this.router.navigate(["home/listdstage"]);
  }

}
