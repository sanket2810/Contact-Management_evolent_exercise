import {Injectable, EventEmitter} from '@angular/core'
import {Logger} from '../service/default-log.service';

@Injectable()
export class EmitterService {

  public notificationEmitter: EventEmitter<any>;
  public onSigninEvent: EventEmitter<any>;
  public onSignOutEvent: EventEmitter<any>;
  public onDeleteReloadGridEvent: EventEmitter<any>;
  public masterTable: EventEmitter<any>;
  public masterTableAdd: EventEmitter<any>;
  public changePassword: EventEmitter<any>;
  public changeFacility: EventEmitter<any>;
  public agreeToTermsAndConditions: EventEmitter<any>;

  constructor(private logger: Logger) {
    this.notificationEmitter = new EventEmitter();
    this.onSigninEvent = new EventEmitter();
    this.onSignOutEvent = new EventEmitter();
    this.onDeleteReloadGridEvent = new EventEmitter();
    this.masterTable = new EventEmitter();
    this.masterTableAdd = new EventEmitter();
    this.changePassword = new EventEmitter();
    this.changeFacility = new EventEmitter();
    this.agreeToTermsAndConditions = new EventEmitter();
  }

}
