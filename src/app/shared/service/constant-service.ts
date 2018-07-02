import {Injectable} from '@angular/core';
import {Router} from '@angular/router';
import * as moment from 'moment';
import {WebserviceUrl} from './webservice-url';

@Injectable()
export class ConstantService extends WebserviceUrl {

  public LOGENABLE = true;
  public permissionObj: any;

  constructor(private router: Router) {
    super();
  }

  public getDateInFormat(date?: any, format?: string) {
    if (date && format) {
      return moment(date).format(format);
    } else if (date && !format) {
      return moment(date).format('YYYY-MM-DD HH:mm:ss');
    } else if (format && !date) {
      return moment(new Date()).format(format);
    } else {
      return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    }
  }
  public getDateString(date?: any,currentFormat?:string, format?: string) {
    if (date && format && currentFormat) {
      return moment(date,currentFormat).format(format);
    }
    else {
      return moment(new Date()).format('YYYY-MM-DD HH:mm:ss');
    }
  }
}
