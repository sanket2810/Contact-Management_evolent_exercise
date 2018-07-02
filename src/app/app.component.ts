import {Component, OnInit} from '@angular/core';
import {Router} from '@angular/router';
import {TokenService} from './shared/service/token.service';
import {EmitterService} from './shared/service/emitter.service';
import {Route} from './shared/constants/index';
import {Message} from 'primeng/components/common/api';
import {NotificationService} from './shared/service/notification.service';
import {LANGUAGE_LIST} from './shared/constants/languages';
import {Util} from './util/util';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  public loggedUser: any;
  public msgs: Message[] = [];
  // define supported languages for application English, French, German
  public LANGUAGES: any[] = LANGUAGE_LIST;

  constructor(private tokenService: TokenService,
              private router: Router,
              private emitterService: EmitterService,
              private notificationService: NotificationService) {

    this.router.navigate([Route.EMPLOYEE]);

    /*if (this.tokenService.get()) {
      this.tokenService.setUserToken(JSON.parse(atob(this.tokenService.get().split('.')[0])));
      const loggedUser = this.tokenService.getUserToken();
      if (Util.isDefinedAndNotNull(loggedUser)) {
        if (Util.isUndefinedOrNull(this.tokenService.getTerms())) {
          this.tokenService.setTerms(loggedUser.isTermConditionWeb);
        }
        this.userService.checkUserRoleAndRedirectToDefaultRoute();
      }
    } else {
      this.router.navigate([Route.LOGIN]);
    }*/
  }

  public ngOnInit() {
    this.emitterService.notificationEmitter.subscribe((obj: any) => this.addNotification(obj));
  }

  private addNotification(msg) {
    this.msgs = [];
    this.msgs.push({severity: msg.type, summary: msg.title, detail: msg.msg});
    setTimeout(() => {
      this.msgs = [];
    }, 5000);
  }
}
