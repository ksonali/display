import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
 

import { AppComponent } from './app.component';
import { ShowdataComponent } from './showdata/showdata.component';


@NgModule({
  declarations: [
    AppComponent,
    ShowdataComponent
  ],
  imports: [
    BrowserModule, HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
