import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Categorie } from 'src/app/models/categorie';
import { CategorieService } from 'src/app/Services/categorie.service';

@Component({
  selector: 'app-modifcategories',
  templateUrl: './modifcategories.component.html',
  styleUrls: ['./modifcategories.component.css']
})
export class ModifcategoriesComponent {
  id: object;
  cat: Categorie = new Categorie();
  constructor(private caterv: CategorieService, private router: Router, private route: ActivatedRoute) { }
  ngOnInit(): void {
    this.id = this.route.snapshot.params['_id'];
    this.caterv.GetCategorie(this.id).subscribe(data => this.cat = data);
  }
  modifiercategorie() {
    this.caterv.UpdateCategorie(this.id, this.cat).subscribe(data => this.router.
      navigate(['/Listcategories']))
  }

  onFileChanged(event: any) {
    this.cat.imagecategorie = "images/categories/" + event.target.files[0].name
    console.log(this.cat.imagecategorie);
  }

}
