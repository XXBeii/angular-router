import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { AppRoutingModule } from './app-routing.module';
import { HeroesModule } from './heroes/heroes.module';
import { CrisisCenterModule } from './crisis-center/crisis-center.module';
// import { HeroListComponent } from './heroes/hero-list/hero-list.component';
// import { CrisisListComponent } from './crisis-center/crisis-list/crisis-list.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    BrowserAnimationsModule,
    HeroesModule,
    CrisisCenterModule,
    AppRoutingModule
  ],
  declarations: [
    AppComponent,
    PageNotFoundComponent
    // modul内申明，routing内引用
    // HeroListComponent,
    // CrisisListComponent,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
