import {Routes} from '@angular/router';

import {CommonGuard} from './shared/guard/common.guard';
import {EmployeeListComponent} from './employee/employee-list/employee-list.component'
import {RoutePath} from "./shared/constants/routes";

export const appRoutes: Routes = [
  {path: '', component: EmployeeListComponent, canActivate: [CommonGuard]}
];
