import {Injectable, EventEmitter} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';

@Injectable()
export class NotificationEmitterService {

  public notificationAdded: EventEmitter<any>;

  constructor() {
    this.notificationAdded = new EventEmitter();
  }

  public success(title: any, msg: any): void {
    this.add('success', title, msg);
  }

  public error(title: any, msg: any): void {
    this.add('error', title, msg);
  }

  public warn(title: any, msg: any): void {
    this.add('warn', title, msg);
  }

  public info(title: any, msg: any): void {
    this.add('info', title, msg);
  }

  public add(type: any, title: any, msg: any): void {
    this.notificationAdded.emit({notifType: type, notifyTitle: title, message: msg});
  }
}
