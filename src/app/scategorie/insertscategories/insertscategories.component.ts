import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { Scategorie } from 'src/app/models/scategorie';
import { CategorieService } from 'src/app/Services/categorie.service';
import { ScategoriesService } from 'src/app/Services/scategories.service';

@Component({
  selector: 'app-insertscategories',
  templateUrl: './insertscategories.component.html',
  styleUrls: ['./insertscategories.component.css']
})
export class InsertscategoriesComponent {
  categories: Categorie[];
  constructor(private souscatserv: ScategoriesService,private catserv:CategorieService, private router: Router) { }
  nouvscategorie: Scategorie = new Scategorie();
  ajoutscategorie() {
    this.souscatserv.AddScategorie(this.nouvscategorie).subscribe(data => this.router.navigate(['/Listscategories']), err => console.log(err));
  }
  onFileChanged(event: any) {
    this.nouvscategorie.imagescat = "images/" + event.target.files[0].name
    console.log(this.nouvscategorie.imagescat);
  }


  ngOnInit() {
    return this.catserv.ListCategories().subscribe(data =>
      this.categories = data),
      (err: any) => console.log(err)
  }
}
