import {Injectable} from '@angular/core';
import {NotificationService} from './notification.service';
import {TokenService} from './token.service';
import {Route, MESSAGES} from '../../shared/constants/index';
import {Router} from '@angular/router';

@Injectable()
export class ErrorService {

  constructor(private notificationService: NotificationService,
              private tokenService: TokenService,
              private router: Router) {
  }

  public handleErrorStatusCode(error): any {
    if (error.status === 403) {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.ACCESS_DENIED);
    } else if (error.status === 406) {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.USER_NOT_EXIST);
    } else if (error.status === 412) {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.USER_NOT_EXIST);
    } else if (error.status === 417) {
      this.tokenService.clearAll();
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.USER_EXPIRED);
      this.router.navigate([Route.LOGIN]);
    } else if (error.status === 500) {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.SERVER_ERROR);
    } else if (error.status === 501) {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.FORGOT_PASSWORD_INITIATED);
    } else if (error.status === 502) {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.WRONG_USERNAME_PASSWORD);
    } else if (error.status === 503) {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.ACTIVATE_ACCOUNT);
    } else if (error.status === 504) {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.ACCOUNT_LOCKED);
    } else if (error.status === 505) {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.ACCOUNT_EXPIRED);
    } else {
      this.notificationService.error(MESSAGES.ERROR.HEADER.ERROR_MESSAGE, MESSAGES.ERROR.ERROR_CONTACT_ADMIN);
    }
  }

}
