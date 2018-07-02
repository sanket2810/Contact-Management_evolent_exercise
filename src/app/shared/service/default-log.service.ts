import {Injectable} from '@angular/core';

// Define the interface that all loggers must implement.
export interface ILogger {
  error(...args: any[]): void;
  info(...args: any[]): void;
  log(...args: any[]): void;
  warn(...args: any[]): void;
  debug(...args: any[]): void;

}

@Injectable()
export class Logger implements ILogger {

  public error(...args: any[]): void {
  }

  public info(...args: any[]): void {
  }

  public log(...args: any[]): void {
  }

  public warn(...args: any[]): void {
  }

  public debug(...args: any[]): void {
  }

}
