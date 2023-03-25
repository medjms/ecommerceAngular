import { Component } from '@angular/core';
import { Scategorie } from 'src/app/models/scategorie';
import { CategorieService } from 'src/app/Services/categorie.service';
import { ScategoriesService } from 'src/app/Services/scategories.service';

@Component({
  selector: 'app-listscategories',
  templateUrl: './listscategories.component.html',
  styleUrls: ['./listscategories.component.css']
})
export class ListscategoriesComponent {
  scategories: Scategorie[];
  constructor(private catserv: ScategoriesService) { }

  ngOnInit() {
    return this.catserv.ListScategories().subscribe(data =>
      this.scategories = data),
      (err: any) => console.log(err)
  }
}
