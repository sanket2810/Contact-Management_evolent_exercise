import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {Http} from '@angular/http';
import {ConstantService} from '../../shared/service/constant-service';
import {Logger} from '../../shared/service/default-log.service';
import {APIURL} from '../../shared/constants/index';
import {TokenService} from '../../shared/service/token.service';
import {DataService} from '../../shared/service/data.service';
import {Util} from '../../util/util';
import { _ } from 'underscore';

@Injectable()
export class EmployeeAddService {

  private webServiceURL: string;

  constructor(private constantService: ConstantService,
              private logger: Logger,
              private http: Http,
              private tokenService: TokenService,
              private dataService: DataService) {
  }

  public saveEmployee(employee: any): any {
    let employees = [];
    const employeeExist = false;
    if (Util.isDefinedAndNotNull(localStorage.getItem('employeeList'))) {
      employees = JSON.parse(localStorage.getItem('employeeList'));
    }
    if (!_.find(employees, {email : employee.email})) {
      employees.push(employee);
      localStorage.setItem('employeeList', JSON.stringify(employees));
      return false;
    } else {
      return true;
    }
  }

  public modifyEmployee(employee: any): any {
    const employees = JSON.parse(localStorage.getItem('employeeList'));
    _.extend(_.findWhere(employees, { email: employee.email }), employee);
    localStorage.setItem('employeeList', JSON.stringify(employees));
  }
}
