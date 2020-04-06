import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderTableComponent } from './header-table/header-table.component';
import {AlertModule} from 'ngx-bootstrap';
import {TooltipModule} from 'ngx-bootstrap';
import {BsDropdownModule} from 'ngx-bootstrap';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {SelectDropDownModule} from 'ngx-select-dropdown';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import {BsDatepickerModule } from 'ngx-bootstrap/datepicker';
import { TabsModule } from 'ngx-bootstrap';
import { AddDeviceComponent } from './add-device/add-device.component';
import { EditManagerDeviceComponent } from './edit-manager-device/edit-manager-device.component';
import { ModalModule } from 'ngx-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    HeaderTableComponent,
    AddDeviceComponent,
    EditManagerDeviceComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AlertModule.forRoot(),
    TooltipModule.forRoot(),
    BsDropdownModule.forRoot(),
    BsDatepickerModule.forRoot(),
    TabsModule.forRoot(),
    ModalModule.forRoot(),
    BrowserAnimationsModule,
    BrowserModule,
    SelectDropDownModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
