import {CanDeactivate} from '@angular/router';
import {Injectable} from '@angular/core';

@Injectable()
export class SaveFormsGuard<T> implements CanDeactivate<T> {

  canDeactivate(component: any): boolean {
    if (!component.areFormsSaved()) {
      return window.confirm('You have unsaved data, Do you really want to leave?');
    } else {
      return true;
    }

  }
}
