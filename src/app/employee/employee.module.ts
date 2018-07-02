import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {FormsModule} from '@angular/forms';
import {HttpModule, Http} from '@angular/http';
import {RouterModule, Routes} from '@angular/router';
import {EmployeeAddModule} from './employee-add/employee-add.module';
import {EmployeeListModule} from './employee-list/employee-list.module';

// services
import {EmployeeRoutes} from './employee.route';
import {EmployeeAddComponent} from './employee-add/employee-add.component';
import {SaveFormsGuard} from '../shared/guard/save-forms.guard';

export function saveFormsGuardHttpFactory() {
  return new SaveFormsGuard<EmployeeAddComponent>()
}

@NgModule({
  declarations: [],
  imports: [
    EmployeeAddModule,
    EmployeeListModule,
    RouterModule.forRoot(EmployeeRoutes, {useHash: true})
  ],
  providers: [
    {provide: 'SaveFormsGuardComponent', useFactory: saveFormsGuardHttpFactory},
  ]
})
export class EmployeeModule {
}
