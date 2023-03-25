import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Article } from '../models/article';

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  baseurl = "http://localhost:3001/api/articles";

  constructor(private http: HttpClient) { }

  ListArticles(): Observable<Article[]> {
    return this.http.get<Article[]>(this.baseurl);
  }
  AddArticle(cat: Article): Observable<Article> {
    return this.http.post<Article>(this.baseurl, cat)
  }
  GetArticle(id: object): Observable<Article> {
    return this.http.get<Article>(this.baseurl + '/' + id);
  }
  UpdateArticle(id: object, cat: Article): Observable<Article> {
    return this.http.put<Article>(this.baseurl + '/' + id, cat);
  }
  DeleteArticle(id: object): Observable<Article> {
    return this.http.delete<Article>(this.baseurl + '/' + id);
  }
}
