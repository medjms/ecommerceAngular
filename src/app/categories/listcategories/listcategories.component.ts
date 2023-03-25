import { Component } from '@angular/core';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/Services/categorie.service';

@Component({
  selector: 'app-listcategories',
  templateUrl: './listcategories.component.html',
  styleUrls: ['./listcategories.component.css']
})
export class ListcategoriesComponent {
  categories: Categorie[];
  constructor(private catserv: CategorieService) { }

  ngOnInit() {
    this.loadcategories();
  }
  loadcategories() {
    return this.catserv.ListCategories().subscribe(data => this.categories = data), (err: any) => console.log(err)
  }
  Deletecategorie(id: object) {
    return this.catserv.DeleteCategorie(id).subscribe(data => { this.loadcategories() });
  }
} 
