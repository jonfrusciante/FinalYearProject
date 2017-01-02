import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpModule, JsonpModule } from '@angular/http';

import { ClarityModule } from 'clarity-angular';

import { AppComponent }  from './app.component';
import { LoginComponent } from './login.component';

import { LoginService } from './login.service';

import { routing } from './app.routing';

@NgModule({
  imports:      [ BrowserModule,
                  ClarityModule,
                  FormsModule,
                  HttpModule,
                  JsonpModule,
                  routing ],
  declarations: [ AppComponent,
                  LoginComponent ],
  providers:    [ LoginService ],
  bootstrap:    [ AppComponent ]
})
export class AppModule { }
