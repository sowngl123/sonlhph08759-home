import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { HelloComponent } from './hello.component';
import { HomeComponent } from './home/home.component';
import { AboutComponent } from './about/about.component';
import { BuildingComponent } from './building/building.component';
import { ContactComponent } from './contact/contact.component';

@NgModule({
  imports:      [ BrowserModule, FormsModule ],
  declarations: [ AppComponent, HelloComponent, HomeComponent, AboutComponent, BuildingComponent, ContactComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
