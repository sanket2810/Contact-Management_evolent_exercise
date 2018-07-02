import {TokenService} from './../service/token.service';
import {Component, OnInit} from '@angular/core';
import {Http} from '@angular/http';
import {Router} from '@angular/router';

import {NotificationEmitterService} from '../service/notification-emitter.service';
import {ConstantService} from '../service/constant-service';
import {EmitterService} from '../service/emitter.service';
import {Route, LANGUAGE_LIST, HEADER_LIST, PERMISSIONS, ROLES} from '../constants/index';
import {Util} from '../../util/util';
import {RoutePath} from "../constants/routes";
import {isNullOrUndefined} from "util";

@Component({
  selector: 'app-header',
  templateUrl: 'header.component.html',
  styleUrls: ['header.component.css']
})

export class HeaderComponent implements OnInit {
  public isAuthorised: Boolean;
  public selectedLan: any;
  public header: any = {};
  public items: any;
  public manageSystem: any;
  public currentAction: any;
  public LANGUAGES = LANGUAGE_LIST;
  public routes = Route;
  public dashboardFlag: Boolean;
  public policyFlag: Boolean;

  constructor(private _notificationService: NotificationEmitterService, private _http: Http,
              private _constantService: ConstantService,
              private router: Router,
              private tokenService: TokenService,
              private emitterService: EmitterService) {
    this.isAuthorised = false;
    this._notificationService.success('Success Message', 'login is successful');
    this.selectedLan = this.LANGUAGES[0].short_name;
    this.manageSystem = [];
    this.currentAction = [];
  }

  public ngOnInit() {
    if (this.tokenService.get()) {
      this.isAuthorised = true;
    }
    this.emitterService.onSigninEvent.subscribe(
      (obj: any) => {
        if(!Util.isEmptyObject(obj) && !Util.isUndefinedOrNull(obj.user) && !Util.isEmptyArray(obj.user.roles) ) {
          this.isAuthorised = obj.flag;
          const role = obj.user.roles[0].role;
          const healthSystemAccessRight = Util.includes(PERMISSIONS.PARENT.HEADER, role);
          this.dashboardFlag = Util.includes(PERMISSIONS.DASHBOARD.HEADER, role);
          this.policyFlag = Util.includes(PERMISSIONS.POLICY.HEADER, role);
          this.manageSystem = [];
          this.manageSystem = Util.copyArray(HEADER_LIST);
          //Commented following three line of code becuase we have hide health system from our system
          /*if (!healthSystemAccessRight) {
            this.manageSystem.splice(0, 1);
          }*/
          this.currentAction = this.manageSystem[0];
        }else{
          this.isAuthorised = false;
        }
      });
    this.emitterService.onSignOutEvent.subscribe(data => {
      this.isAuthorised = false;
    });
  }

  public langChange(lang: any) {
    this.selectedLan = lang.target.value;
    // this.translate.use(lang.target.value);
  }

  public onClickLogout() {
    // this.translate.use('en');
    this.isAuthorised = false;
    this.tokenService.clearAll();
    this.router.navigate([Route.LOGIN]);
  }

  public resetToManageAccount () {
    this.currentAction = this.manageSystem[0];
  }
}
