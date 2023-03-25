import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { ListarticlesdatatableComponent } from './articles/listarticlesdatatable/listarticlesdatatable.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { InsertcategoriesComponent } from './categories/insertcategories/insertcategories.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { ModifcategoriesComponent } from './categories/modifcategories/modifcategories.component';
import { InsertscategoriesComponent } from './scategorie/insertscategories/insertscategories.component';
import { ListscategoriesComponent } from './scategorie/listscategories/listscategories.component';
import { ModifscategoriesComponent } from './scategorie/modifscategories/modifscategories.component';

const routes: Routes = [
  {path:'Listarticles',component:ListarticlesComponent},
  {path:'Listarticlescard',component:ListarticlescardComponent},
  {path:'Listarticlesdatatable',component:ListarticlesdatatableComponent},
  {path:'Insertarticles',component:InsertarticlesComponent},
  {path:'Modifarticles/:_id',component:ModifarticlesComponent},

  {path:'Listcategories',component:ListcategoriesComponent},
  {path:'Insertcategories',component:InsertcategoriesComponent},
  {path:'Modifcategories/:_id',component:ModifcategoriesComponent},

  {path:'Listscategories',component:ListscategoriesComponent},
  {path:'Insertscategories',component:InsertscategoriesComponent},
  {path:'Modifscategories/:_id',component:ModifscategoriesComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
