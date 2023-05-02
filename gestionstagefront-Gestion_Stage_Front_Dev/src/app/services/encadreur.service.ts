import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Encadreur } from '../modules/encadreur';
@Injectable({
  providedIn: 'root'
})
export class EncadreurService {
  

  
baseurl :string = environment.baseurl+"/Encadreur"
  constructor(private http: HttpClient) { 

  }
  ajouterEncadreur(encadreur: Encadreur): Observable<Encadreur> {
    return this.http.post(`${this.baseurl}/saveOrUpdate`, encadreur)
    .pipe(
      map((response:any) => response as Encadreur)
    );
  }
  getEncadreurList(): Observable<Encadreur[]> {
    return this.http.get<Encadreur[]>(`${this.baseurl}/listerEncadreur`)
    .pipe(
      map((response:any) => response as Encadreur[])
    );
    
  }
 // deleteEncadreur(id: number): Observable<any> {
  //  return this.http.delete(`${this.baseUrl}/${id}`, { responseType: 'text' });
  //}
  
  deleteEncadreur(id: any): Observable<any> {
    return this.http.delete(`${this.baseurl}/supprimer/${id}`,{ responseType: 'text' });
  }

  getEncadreur(id: number): Observable<Encadreur> {
    return this.http.get(`${this.baseurl}/recherherEncadreur/${id}`).pipe(
      map((response:any) => response as Encadreur)
    );
  }


}