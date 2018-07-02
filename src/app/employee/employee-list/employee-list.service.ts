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

@Injectable()
export class EmployeeListService {

  private webServiceURL: string;

  constructor(private constantService: ConstantService,
              private logger: Logger,
              private http: Http,
              private tokenService: TokenService,
              private dataService: DataService) {
  }

  public getAllEmployees(): any {
    const employees = localStorage.getItem('employeeList');
    return (Util.isDefinedAndNotNull(employees)) ? JSON.parse(employees) : [];
  }
}
