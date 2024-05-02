import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { FiglioDiMerdaBastardoComponent } from './figlio-di-merda-bastardo/figlio-di-merda-bastardo.component';

@NgModule({
  declarations: [
    AppComponent,
    FiglioDiMerdaBastardoComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
