import {Injectable} from '@angular/core';
import 'rxjs/Rx';
import {Observable} from 'rxjs/Rx';
import {ConstantService} from '../service/constant-service';

@Injectable()
export class ListService {

  private webServiceURL: string;

  constructor(private _constantService: ConstantService) {
  }

}

