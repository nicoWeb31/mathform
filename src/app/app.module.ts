import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { EquationComponent } from './equation/equation.component';
import { ReactiveFormsModule } from '@angular/forms';
import { AnsewrHighligthDirective } from './ansewr-highligth.directive'

@NgModule({
  declarations: [
    AppComponent,
    EquationComponent,
    AnsewrHighligthDirective
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
