import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { ClarityModule } from 'clarity-angular';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,
                  ClarityModule,
                  routing ],
  declarations: [ AppComponent,
                  LoginComponent ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
