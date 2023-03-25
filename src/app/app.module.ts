import { HttpClientModule } from '@angular/common/http';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListcategoriesComponent } from './categories/listcategories/listcategories.component';
import { InsertcategoriesComponent } from './categories/insertcategories/insertcategories.component';
import { ModifcategoriesComponent } from './categories/modifcategories/modifcategories.component';
import { ListarticlesComponent } from './articles/listarticles/listarticles.component';
import { InsertarticlesComponent } from './articles/insertarticles/insertarticles.component';
import { ModifarticlesComponent } from './articles/modifarticles/modifarticles.component';
import { ModifscategoriesComponent } from './scategorie/modifscategories/modifscategories.component';
import { ListscategoriesComponent } from './scategorie/listscategories/listscategories.component';
import { InsertscategoriesComponent } from './scategorie/insertscategories/insertscategories.component';
import { NavbarComponent } from './navbar/navbar.component';
import { ListarticlescardComponent } from './articles/listarticlescard/listarticlescard.component';
import { DataTablesModule } from 'angular-datatables';
import { ListarticlesdatatableComponent } from './articles/listarticlesdatatable/listarticlesdatatable.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';

@NgModule({
  declarations: [
    AppComponent,
    ListcategoriesComponent,
    InsertcategoriesComponent,
    ModifcategoriesComponent,
    ListarticlesComponent,
    InsertarticlesComponent,
    ModifarticlesComponent,
    ModifscategoriesComponent,
    ListscategoriesComponent,
    InsertscategoriesComponent,
    NavbarComponent,
    ListarticlescardComponent,
    ListarticlesdatatableComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    DataTablesModule,
    Ng2SearchPipeModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
