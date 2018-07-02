import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule, Http} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {MultiSelectModule} from 'primeng/primeng';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';
import {DialogModule} from 'primeng/primeng';

import {EmployeeAddComponent} from './employee-add.component';
import {EmployeeRoutes} from '../employee.route';

// services
import {EmployeeAddService} from './employee-add.service';

@NgModule({
  declarations: [
    EmployeeAddComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(EmployeeRoutes),
    BrowserAnimationsModule,
    MultiSelectModule,
    AngularMultiSelectModule,
    DialogModule
  ],
  providers: [
    EmployeeAddService
  ]
})
export class EmployeeAddModule {
}
