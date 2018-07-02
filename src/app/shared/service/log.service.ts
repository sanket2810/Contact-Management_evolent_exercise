// Declare the console as an ambient value so that TypeScript doesn't complain.
declare var console: any;

// Import the application components and services.
import {ILogger} from './default-log.service';
import {ConstantService} from './constant-service';
import {Injectable} from '@angular/core';

// I log values to the ambient console object.
@Injectable()
export class ConsoleLogService implements ILogger {

  displayStatus = false;

  constructor(private _constantService: ConstantService) {
    this.displayStatus = this._constantService.LOGENABLE;
  }

  // Error msg get printed by default
  public error(...args: any[]): void {
    args[0] = ['[ERROR]: ', args[0], ': ', new Date().toLocaleString(), ': '].join('');
    ( console && console.error ) && console.error(...args);

  }

  public info(...args: any[]): void {
    if (this.displayStatus) {
      args[0] = ['[INFO]: ', args[0], ': ', new Date().toLocaleString(), ': '].join('');
      ( console && console.info ) && console.info(...args);
    }

  }

  public log(...args: any[]): void {
    if (this.displayStatus) {
      args[0] = ['[LOG]: ', args[0], ': ', new Date().toLocaleString(), ': '].join('');
      ( console && console.log ) && console.log(...args);
    }

  }

  public warn(...args: any[]): void {
    if (this.displayStatus) {
      args[0] = ['[Warning]: ', args[0], ': ', new Date().toLocaleString(), ': '].join('');
      ( console && console.warn ) && console.warn(...args);
    }

  }

  public debug(...args: any[]): void {
    if (this.displayStatus) {
      args[0] = ['[DEBUG]: ', args[0], ': ', new Date().toLocaleString(), ': '].join('');
      ( console && console.debug ) && console.debug(...args);
    }

  }
}
