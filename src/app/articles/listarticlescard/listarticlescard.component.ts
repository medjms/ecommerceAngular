import { Component } from '@angular/core';
import { Article } from 'src/app/models/article';
import { ArticlesService } from 'src/app/Services/articles.service';

@Component({
  selector: 'app-listarticlescard',
  templateUrl: './listarticlescard.component.html',
  styleUrls: ['./listarticlescard.component.css']
})
export class ListarticlescardComponent {
  articles: Article[];
  constructor(private catserv: ArticlesService) { }

  ngOnInit() {
      return this.ListArt()
  }
  ListArt(){
    this.catserv.ListArticles().subscribe(data =>
    this.articles = data),
      (err: any) => console.log(err)
  }
}
