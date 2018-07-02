import {Injectable} from '@angular/core';
import {Logger} from '../service/default-log.service';
import {DataService} from '../../shared/service/data.service';
import {EmitterService} from './emitter.service';

@Injectable()
export class TokenService {

  private key = 'X-Auth-Token';
  private agreeToTermsAndConditionsKey = 'terms';
  private userToken: any;

  constructor(private logger: Logger,
              private dataService: DataService,
              private emitterService: EmitterService) {
  }

  public set(token: any): void {
    localStorage.setItem(this.key, token.toString());
    this.userToken = JSON.parse(atob(token.split('.')[0]));
  }

  public get(): string {
    return localStorage.getItem(this.key);
  }

  public setTerms(terms: any): void {
    localStorage.setItem(this.agreeToTermsAndConditionsKey, terms);
  }

  public getTerms(): string {
    return localStorage.getItem(this.agreeToTermsAndConditionsKey);
  }

  public setUserToken(user: any) {
    this.userToken = user;
  }

  public getUserToken() {
    return this.userToken;
  }

  clearAll(): void {
    this.userToken = null;
    let username = '';
    let password = '';
    let sharedDevice: Boolean = false;
    if (localStorage.getItem('username') != null && localStorage.getItem('password') != null) {
      username = localStorage.getItem('username');
      password = localStorage.getItem('password');
      sharedDevice = true;
    }
    localStorage.clear();

    const facilityObj = {
      id: null,
      name: null
    };
    this.dataService.healthsystem = null;
    this.dataService.employee = null;
    if (sharedDevice) {
      localStorage.setItem('username', username);
      localStorage.setItem('password', password);
    }
  }
}
