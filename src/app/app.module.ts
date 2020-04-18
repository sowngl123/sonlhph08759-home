import { NgModule } from "@angular/core";
import { BrowserModule } from "@angular/platform-browser";
import { FormsModule } from "@angular/forms";
import { AppRoutingModule } from "./app-routing.module";

import { AppComponent } from "./app.component";
import { HelloComponent } from "./hello.component";
import { HomeComponent } from "./home/home.component";
import { AboutComponent } from "./about/about.component";
import { BuildingComponent } from "./building/building.component";
import { ContactComponent } from "./contact/contact.component";
import { ManagerComponent } from "./manager/manager.component";
import { NotFoundComponent } from "./not-found/not-found.component";
import { ProductAddComponent } from "./product-add/product-add.component";
import { ProductDetailComponent } from "./product-detail/product-detail.component";
import { ProductEditComponent } from "./product-edit/product-edit.component";
import { ProuctDeleteComponent } from "./prouct-delete/prouct-delete.component";
import { ProductListComponent } from './product-list/product-list.component';
import { HttpClientModule } from '@angular/common/http';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagehomeComponent } from './pagehome/pagehome.component';

@NgModule({
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule
  ],
  declarations: [
    AppComponent,
    HelloComponent,
    HomeComponent,
    AboutComponent,
    BuildingComponent,
    ContactComponent,
    ManagerComponent,
    NotFoundComponent,
    ProductAddComponent,
    ProductDetailComponent,
    ProductEditComponent,
    ProuctDeleteComponent,
    ProductListComponent,
    AdminComponent,
    DashboardComponent,
    PagehomeComponent
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}
