import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {DataService} from '../../shared/service/data.service';
import {NotificationService} from '../../shared/service/notification.service';
import {Route, MESSAGES} from '../../shared/constants/index';
import {Util} from '../../util/util';
import {ErrorService} from '../../shared/service/error-service';
import {FilterPipe} from './employee-pipes';
import {EmployeeAddService} from '../employee-add/employee-add.service';
import {EmployeeListService} from './employee-list.service';

@Component({
  templateUrl: 'employee-list.component.html',
})

export class EmployeeListComponent implements OnInit {
  public spinner: Boolean = false;
  public employeeList: any[];
  public employeeAddRoute = Route.EMPLOYEE + Route.ADD;
  public employeeModifyRoute = Route.EMPLOYEE + Route.MODIFY;
  public searchText: string;

  constructor(private router: Router,
              private employeeAddService: EmployeeAddService,
              private employeeListService: EmployeeListService,
              private dataService: DataService,
              private notificationService: NotificationService,
              private errorService: ErrorService) {
  }

  public ngOnInit() {
    this.employeeList = [];
    this.getEmployeeList();
  }

  public addEmployee () {
    this.dataService.employeeList = [];
  }

  public getEmployeeList() {
    this.employeeList = this.employeeListService.getAllEmployees();
    if (Util.isEmptyArray(this.employeeList)) {
      /*This is to add dummy data to show list for first time*/
      this.employeeList = [{
        firstName: 'sanket',
        lastName: 'sonawane',
        email: 'sanket@gmai.com',
        phoneNo: 7236782388,
        activeFlag: true
      },
        {
          firstName: 'Sneha',
          lastName: 'Kotawade',
          email: 'sneha@gmai.com',
          phoneNo: 8347629835,
          activeFlag: false
        }];
      localStorage.setItem('employeeList', JSON.stringify(this.employeeList));
    }
  }

  public editEmployee(employee: any) {
    this.dataService.employee = employee;
  }

  public changeStatus(employee) {
    employee.activeFlag = !employee.activeFlag;
    this.employeeAddService.modifyEmployee(employee);
    this.notificationService.success(MESSAGES.SUCCESS.HEADER.EMPLOYEE_MODIFIED, MESSAGES.SUCCESS.EMPLOYEE_MODIFIED);
  }
}
