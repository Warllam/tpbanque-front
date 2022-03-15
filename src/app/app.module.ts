import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { CreerCompteComponent } from './creer-compte/creer-compte.component';

@NgModule({
  declarations: [
    AppComponent,
    CreerCompteComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
