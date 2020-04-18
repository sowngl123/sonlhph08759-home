import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ProductAddComponent } from './product-add/product-add.component';
import { ProductListComponent } from './product-list/product-list.component';
import { ManagerComponent } from './manager/manager.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { HomeComponent } from './home/home.component';
import { ProductDetailComponent } from './product-detail/product-detail.component';
import { ProductEditComponent } from './product-edit/product-edit.component';
import { AboutComponent } from './about/about.component';
import { BuildingComponent } from './building/building.component';
import { ContactComponent } from './contact/contact.component';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagehomeComponent } from './pagehome/pagehome.component';


const routes: Routes = [
  { path: '', redirectTo: 'home', pathMatch: 'full'},
  
  { path: 'home', component: HomeComponent, 
      children: [
        { path: '', redirectTo: 'pagehome', pathMatch: 'full'},
        {path: 'pagehome', component: PagehomeComponent},
        { path: 'manager', component: ManagerComponent},
        { path: 'add-product', component: ProductAddComponent},
        {path: 'about', component: AboutComponent},
        {path: 'building', component: BuildingComponent},
        {path: 'contact', component: ContactComponent},
        {path: 'list-product', component: ProductListComponent},
        {path: 'product/:productID', component: ProductDetailComponent},
        {path: 'product/edit/:productID', component: ProductEditComponent},
      ]
    },
  { path: 'admin', component: AdminComponent, 
      children: [
        { path: '', redirectTo: 'dashboard', pathMatch: 'full'},
        { path: 'dashboard', component: DashboardComponent},
        { path: 'manager', component: ManagerComponent},
        { path: 'add-product', component: ProductAddComponent},
      ]
    },
  {path: '**', component: NotFoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
