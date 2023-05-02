
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Recruteur } from '../modules/recruteur';


@Injectable({
  providedIn: 'root'
})
export class RecruteurService {
  baseurl :string = environment.baseurl+"/Recruteur"


  constructor(private http: HttpClient) { }
  /*deleteRecruteur(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/supprimer/${id}`,{ responseType: 'text' });
  }*/
  ajouterRecruteur(recruteur: Recruteur): Observable<Recruteur> {
    return this.http.post(`${this.baseurl}/saveOrUpdate`, recruteur)
    .pipe(
      map((response:any) => response as Recruteur)
    );
  }

  getRecruteurList(): Observable<Recruteur[]> {
    return this.http.get<Recruteur[]>(`${this.baseurl}/listerRecru`)
    .pipe(
      map((response:any) => response as Recruteur[])
    );
    
  }
}
