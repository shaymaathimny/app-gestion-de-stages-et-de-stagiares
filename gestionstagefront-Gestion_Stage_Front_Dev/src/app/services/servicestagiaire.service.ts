import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Stagiaire } from '../modules/stagiaire';
import { LabelValu } from '../modules/labelValu';
@Injectable({
  providedIn: 'root'
})
export class StagiaireService {

  
baseurl :string = environment.baseurl+"/Stagiaire"
  constructor(private http: HttpClient) { 

  }
 ajouterStagiaire(stagiaire: Stagiaire): Observable<Stagiaire> {
    return this.http.post(`${this.baseurl}/saveOrUpdate`, stagiaire)
    .pipe(
      map((response:any) => response as Stagiaire)
    );
  }
  getStagiaireList(): Observable<Stagiaire[]> {
    return this.http.get<Stagiaire[]>(`${this.baseurl}/listerstagiaire`)
    .pipe(
      map((response:any) => response as Stagiaire[])
    );
  }
  getStagiaireListDto(): Observable<LabelValu[]> {
    return this.http.get<LabelValu[]>(`${this.baseurl}/listerStagiaireDto`)
    .pipe(
      map((response:any) => response as LabelValu[])
    );
  }
 deleteStagiaire(id: number): Observable<any> {
   return this.http.delete(`${this.baseurl}/supprimer/${id}`, { responseType: 'text' });
  }

 

  getStagiaire(id: number): Observable<Stagiaire> {
    return this.http.get(`${this.baseurl}/recherher/${id}`).pipe(
      map((response:any) => response as Stagiaire)
    );
  }

}
