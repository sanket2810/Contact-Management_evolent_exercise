import {Injectable} from '@angular/core';

import {Logger} from '../service/default-log.service';
import {EmitterService} from '../service/emitter.service';

@Injectable()
export class NotificationService {

  constructor(private logger: Logger,
              private emitterService: EmitterService) {
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

  private add(type: any, title: any, msg: any): void {
    this.emitterService.notificationEmitter.emit({type: type, title: title, msg: msg});
  }
}
