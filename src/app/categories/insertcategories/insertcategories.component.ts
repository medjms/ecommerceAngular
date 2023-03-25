import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/Services/categorie.service';

@Component({
  selector: 'app-insertcategories',
  templateUrl: './insertcategories.component.html',
  styleUrls: ['./insertcategories.component.css']
})
export class InsertcategoriesComponent {
  constructor(private catserv: CategorieService, private router: Router) { }
  nouvcategorie: Categorie = new Categorie();
  ajoutcategorie() {
    this.catserv.AddCategorie(this.nouvcategorie).subscribe(data => this.router.navigate(['/categories/listcategories']), err => console.log(err));
  }
  onFileChanged(event: any) {
    this.nouvcategorie.imagecategorie = "images/categories/" + event.target.files[0].name
    console.log(this.nouvcategorie.imagecategorie);
  }
}
