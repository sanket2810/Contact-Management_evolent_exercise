import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {CommonModule} from '@angular/common';
import {HttpModule, Http} from '@angular/http';
import {RouterModule} from '@angular/router';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import {DataTableModule, MultiSelectModule} from 'primeng/primeng';
import {AngularMultiSelectModule} from 'angular2-multiselect-dropdown/angular2-multiselect-dropdown';

import {EmployeeListComponent} from './employee-list.component';
import {EmployeeRoutes} from '../employee.route';
import {FilterPipe} from './employee-pipes';

// services
import {EmployeeListService} from './employee-list.service';

@NgModule({
  declarations: [
    EmployeeListComponent,
    FilterPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    CommonModule,
    RouterModule.forRoot(EmployeeRoutes),
    BrowserAnimationsModule,
    DataTableModule,
    MultiSelectModule,
    AngularMultiSelectModule
  ],
  providers: [
    EmployeeListService
  ],

})
export class EmployeeListModule {
}
