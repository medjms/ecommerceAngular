import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Scategorie } from 'src/app/models/scategorie';
import { ArticlesService } from 'src/app/Services/articles.service';
import { ScategoriesService } from 'src/app/Services/scategories.service';

@Component({
  selector: 'app-insertarticles',
  templateUrl: './insertarticles.component.html',
  styleUrls: ['./insertarticles.component.css']
})
export class InsertarticlesComponent {
  scategories: Scategorie[];
  nouvarticle: Article = new Article();
  
  constructor(private artserv: ArticlesService,private souscatserv: ScategoriesService, private router: Router) { }
  
  ajoutarticle() {
    this.artserv.AddArticle(this.nouvarticle).subscribe(data => this.router.navigate(['/Listarticles']), err => console.log(err));
  }
  onFileChanged(event: any) {
    this.nouvarticle.imageart = "images/articles/" + event.target.files[0].name
    console.log(this.nouvarticle.imageart);
  }


  ngOnInit() {
    return this.souscatserv.ListScategories().subscribe(data =>
      this.scategories = data),
      (err: any) => console.log(err)
  }

}
