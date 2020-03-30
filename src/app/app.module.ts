import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BuildingComponent } from './building/building.component';
import { ContactComponent } from './contact/contact.component';
import { ManagerComponent } from './manager/manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { ProductAddComponent } from './product-add/product-add.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { ProuctDeleteComponent } from './prouct-delete/prouct-delete.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, BuildingComponent, ContactComponent, ManagerComponent, NotFoundComponent, ProductAddComponent, ProductDetailComponent, ProductEditComponent, ProuctDeleteComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
