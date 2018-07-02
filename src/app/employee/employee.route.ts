import {Routes} from '@angular/router';
import {CommonGuard} from '../shared/guard/common.guard';
import {EmployeeListComponent} from './employee-list/employee-list.component';
import {EmployeeAddComponent} from './employee-add/employee-add.component';
import {RoutePath} from '../shared/constants/index';

export const EmployeeRoutes: Routes = [
  {
    path: RoutePath.EMPLOYEE,
    component: EmployeeListComponent,
    // canActivate: [CommonGuard]
  },
  {
    path: RoutePath.EMPLOYEE, children: [
    {
      path: RoutePath.ADD,
      component: EmployeeAddComponent,
      canActivate: [CommonGuard],
      canDeactivate: ['SaveFormsGuardComponent']
    },
    {
      path: RoutePath.MODIFY,
      component: EmployeeAddComponent,
      canActivate: [CommonGuard],
      canDeactivate: ['SaveFormsGuardComponent']
    }
  ]
  }
];
