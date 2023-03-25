import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Scategorie } from 'src/app/models/scategorie';
import { ArticlesService } from 'src/app/Services/articles.service';
import { ScategoriesService } from 'src/app/Services/scategories.service';

@Component({
  selector: 'app-listarticlesdatatable',
  templateUrl: './listarticlesdatatable.component.html',
  styleUrls: ['./listarticlesdatatable.component.css']
})
export class ListarticlesdatatableComponent {
  articles: Article[];
  scategories: Scategorie[];
  term: string;

  constructor(private artserv: ArticlesService, private scatserv: ScategoriesService, private router: Router) { }

  ngOnInit() {
    this.ListArt();
    this.ListScat();

  }
  ListScat() {
    this.scatserv.ListScategories().subscribe(data => this.scategories = data)
    console.log(this.scategories);
    
  }
  ListArt() {
    this.artserv.ListArticles().subscribe(data => this.articles = data), (err: any) => console.log(err)
  }
  ModifierArt(_id: object) {
    this.router.navigate(['/Modifarticles', _id]);
  }
  SupprimerArt(id: object) {
    return this.artserv.DeleteArticle(id).subscribe(data => { this.ListArt() });
  }
}
