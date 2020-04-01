import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTableComponent } from './header-table/header-table.component';
import {AlertModule} from 'ngx-bootstrap';
import {TooltipModule} from 'ngx-bootstrap';
import { from } from 'rxjs';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTableComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot()
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
