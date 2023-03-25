import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Article } from 'src/app/models/article';
import { Scategorie } from 'src/app/models/scategorie';
import { ArticlesService } from 'src/app/Services/articles.service';
import { ScategoriesService } from 'src/app/Services/scategories.service';

@Component({
  selector: 'app-modifarticles',
  templateUrl: './modifarticles.component.html',
  styleUrls: ['./modifarticles.component.css']
})
export class ModifarticlesComponent {
  id: object;
  art: Article = new Article();
  scat: Scategorie= new Scategorie();
  scategories: Scategorie[];
  constructor(private route: ActivatedRoute, private artserv: ArticlesService,private scatserv:ScategoriesService,
    private router: Router) { }

  ngOnInit() {
    this.id = this.route.snapshot.params['_id'];
    this.artserv.GetArticle(this.id).subscribe(data => this.art = data);
    this.scatserv.ListScategories().subscribe(data =>this.scategories = data);
  }

  modifierarticle() {
    this.artserv.UpdateArticle(this.id, this.art).subscribe(data => this.router.
      navigate(['/Listarticles']))
  }

  onFileChanged(event: any) {
    this.art.imageart = "images/" + event.target.files[0].name
    console.log(this.art.imageart);
  }
}
