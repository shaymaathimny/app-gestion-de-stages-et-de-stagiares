import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map } from 'rxjs';
import { Observable } from 'rxjs/internal/Observable';
import { environment } from 'src/environments/environment';
import { Stage } from '../modules/stage';
import {  StageInfoListing} from '../modules/stageInfoListing';
import { StageInfo } from '../modules/stageinfo';
import { StageInformations } from '../modules/stageInformations';

@Injectable({
  providedIn: 'root'
})
export class StageService {
  baseurl :string = environment.baseurl+"/stage"
  constructor(private http: HttpClient) { }

  ajouterStage(stage: Stage): Observable<Stage> {
    return this.http.post(`${this.baseurl}/saveOrUpdate`, stage)
    .pipe(
      map((response:any) => response as Stage)
    );
  }
  getStageList(): Observable<StageInfoListing[]> {
    return this.http.get<StageInfoListing[]>(`${this.baseurl}/listerStage`)
    .pipe(
      map((response:any) => response as StageInfoListing[])
    );
    
  }
  deleteStage(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/supprimer/${id}`,{ responseType: 'text' });
  }
  getStageInfo(id: number): Observable<StageInformations> {
    return this.http.get(`${this.baseurl}/recherherStage/${id}`).pipe(
      map((response:any) => response as StageInformations)
    );
  }

}
