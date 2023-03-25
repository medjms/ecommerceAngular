import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Categorie } from 'src/app/models/categorie';
import { Scategorie } from 'src/app/models/scategorie';
import { ArticlesService } from 'src/app/Services/articles.service';
import { CategorieService } from 'src/app/Services/categorie.service';
import { ScategoriesService } from 'src/app/Services/scategories.service';

@Component({
  selector: 'app-listarticles',
  templateUrl: './listarticles.component.html',
  styleUrls: ['./listarticles.component.css']
})
export class ListarticlesComponent {
  articles: Article[];
  scategories: Scategorie[];
  categories: Categorie[];
  term: string;


  constructor(private artserv: ArticlesService, private catserv: CategorieService, private scatserv: ScategoriesService, private router: Router) { }

  ngOnInit() {
    this.ListArt();
    this.ListScat();
    this.ListCat();
  }
  ListCat() {
    return this.catserv.ListCategories().subscribe(data => {
      this.categories = data;
    }),
      (err: any) => console.log(err)
  }
  ListScat() {
    this.scatserv.ListScategories().subscribe(data => this.scategories = data)
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
