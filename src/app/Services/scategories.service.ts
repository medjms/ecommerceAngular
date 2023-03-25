import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Scategorie } from '../models/scategorie';

@Injectable({
  providedIn: 'root'
})
export class ScategoriesService {
  baseurl = "http://localhost:3001/api/scategories";

  constructor(private http: HttpClient) { }

  ListScategories(): Observable<Scategorie[]> {
    return this.http.get<Scategorie[]>(this.baseurl);
  }
  AddScategorie(cat: Scategorie): Observable<Scategorie> {
    return this.http.post<Scategorie>(this.baseurl, cat)
  }
  GetScategorie(id: object): Observable<Scategorie> {
    return this.http.get<Scategorie>(this.baseurl + '/' + id);
  }
  UpdateScategorie(id: object, cat: Scategorie): Observable<Scategorie> {
    return this.http.put<Scategorie>(this.baseurl + '/' + id, cat);
  }
  DeleteScategorie(id: object): Observable<Scategorie> {
    return this.http.delete<Scategorie>(this.baseurl + '/' + id);
  }
}
