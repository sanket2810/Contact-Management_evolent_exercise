import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';

import {DataService} from '../../shared/service/data.service';
import {CommonEvent} from '../../shared/constants/index';
import {NotificationService} from '../../shared/service/notification.service';
import {Route, MESSAGES} from '../../shared/constants/index';
import {Util} from '../../util/util';
import {Employee} from '../employee';
import {EmployeeAddService} from './employee-add.service';

declare var jQuery: any;

@Component({
  templateUrl: 'employee-add.component.html',
})

export class EmployeeAddComponent implements OnInit {

  private action: string;
  public spinner: Boolean = false;
  public employee: Employee = new Employee();
  public addEmployee: Boolean = true;
  public tokenDisplay: Boolean = false;
  public linkToParentToken: String = '';
  public employeeAlreadyExist: Boolean = false;
  public areFormsSavedFlag: Boolean = true;

  constructor(private router: Router,
              private dataService: DataService,
              private notificationService: NotificationService,
              private employeeAddService: EmployeeAddService) {
  }

  public ngOnInit() {
    const routeUrl = (this.router.url).split('/');
    this.action = routeUrl[routeUrl.length - 1];

    if (this.action === CommonEvent.modify) {
      this.addEmployee = false;
      this.employee = this.dataService.employee;
    }
  }

  public changeStatus(isDelete, isActive) {
    this.employee.activeFlag = isActive;
    this.modifyEmployee();
    this.router.navigate([Route.EMPLOYEE]);
  }

  public createEmployee() {
    const isEmployeeExist = this.employeeAddService.saveEmployee(this.employee)
    if (isEmployeeExist) {
      this.employeeAlreadyExist = true;
    } else {
      this.refreshEmployeeList(MESSAGES.SUCCESS.HEADER.EMPLOYEE_ADDED, MESSAGES.SUCCESS.EMPLOYEE_CREATED);
    }
  }

  public modifyEmployee() {
    this.employeeAddService.modifyEmployee(this.employee);
    this.refreshEmployeeList(MESSAGES.SUCCESS.HEADER.EMPLOYEE_MODIFIED, MESSAGES.SUCCESS.EMPLOYEE_MODIFIED);
  }

  public copyToClipboard(id) {
    jQuery(id).select();
    const copiedText = document.execCommand('copy');
    if (copiedText) {
      this.notificationService.success(MESSAGES.SUCCESS.HEADER.SUCCESS_MESSAGE, MESSAGES.SUCCESS.TOKEN_COPY_SUCCESSFULL);
    }
  }

  public areFormsSaved() {
    return this.areFormsSavedFlag;
  }

  public refreshEmployeeList(messageHeader, messageBody) {
    this.areFormsSavedFlag = true;
    this.notificationService.success(messageHeader, messageBody);
    this.router.navigate([Route.EMPLOYEE]);
  }
}
