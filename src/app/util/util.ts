import {RoutePath, Route} from '../shared/constants/routes';

export class Util {

  private static getPrototypeOf = Object.getPrototypeOf;

  public static isDefined(value): boolean {
    return typeof value !== 'undefined';
  }

  public static isDefinedAndNotNull(value): boolean {
    return (typeof value !== 'undefined' && value !== null);
  }

  public static isUndefined(value): boolean {
    return typeof value === 'undefined';
  }

  public static isUndefinedOrNull(value): boolean {
    return (typeof value === 'undefined' || value == null);
  }

  public static isEmptyRoute(value): boolean {
    if (this.isUndefinedOrNull(value)) {
      return true;
    }
    return (value === '/' || value === './' || value === '');
  }

  public static isLoginRoute(value): boolean {
    if (this.isUndefinedOrNull(value)) {
      return true;
    }
    if(value.startsWith(Route.FORGOT_PASSWORD))
    {
     
      return true;
    }
    return (value === Route.LOGIN || value === RoutePath.LOGIN || value ===Route.FORGOT_PASSWORD);
  }

  public static isObject(value): boolean {
    return value !== null && typeof value === 'object';
  }

  public static isBlankObject(value): boolean {
    return value !== null && typeof value === 'object' && !this.getPrototypeOf(value);
  }

  public static isString(value): boolean {
    return typeof value === 'string';
  }

  public static isNumber(value): boolean {
    value = parseInt(value);
    return isNaN(value) ? false : true;
  }

  public static isDate(value): boolean {
    return toString.call(value) === '[object Date]';
  }

  public static isFunction(value) {
    return typeof value === 'function';
  }

  public static isBoolean(value): boolean {
    return typeof value === 'boolean';
  }

  public static includes(array, obj) {
    return Array.prototype.indexOf.call(array, obj) !== -1;
  }

  public static trim(value: string) {
    return this.isString(value) ? value.trim() : value;
  }

  public static isEmptyString(value: string): boolean {
    let result: boolean = true;
    if (this.isDefinedAndNotNull(value)) {
      value = value.trim();
      result = (value.length == 0);
    }
    return result;
  }

  public static isEmptyArray(value: any[]): boolean {
    let result: boolean = true;
    if (this.isDefinedAndNotNull(value)) {
      result = (value.length == 0);
    }
    return result;
  }

  public static isEmptyObject(obj: any): boolean {
    let result = true;
    if (this.isDefinedAndNotNull(obj)) {
      result = (Object.keys(obj).length === 0);
    }
    return result;
  }

  public static copyObject(obj: any): any {
    return Object.assign({}, obj);
  }

  public static copyArray(obj: any[]) {
    return Object.assign([], obj);
  }

  public static ignoreJsonNullValue(data): any {
    let replacer = function (key, value) {
      if (value == null || value == undefined) {
        return undefined;
      }
      return value;
    };
    let jsonData = JSON.parse(JSON.stringify(data, replacer));
    return jsonData;
  }

  public static removeSpecialCharacter(value: string): string {
    value = value.trim();
    return value.replace(/[^a-zA-Z]/g, "")
  }

  public static getRandomNumber(): number {
    var number = Math.floor(Math.random() * 90000) + 10000;
    return number;
  }

  public static getQueryParamByKey(key: string): string {
    let url = window.location.href;
    key = key.replace(/[\[\]]/g, "\\$&");
    var regex = new RegExp("[?&]" + key + "(=([^&#]*)|&|#|$)"),
      results = regex.exec(url);
    if (!results) return null;
    if (!results[2]) return '';
    return decodeURIComponent(results[2].replace(/\+/g, " "));
  }

  public static replace(value: string, replaceString: string, replaceWith: any): string {
    return value.replace(replaceString, replaceWith);
  }

  public static replaceAll(value: string, replaceString: string, replaceWith: any): string {
    return value.replace(new RegExp(replaceString, 'g'), replaceWith);
  }

  public static convertPascalCase(str) {
    const out = str.replace(/^[a-z]|[^\s][A-Z]/g, function (str, offset) {
      if (offset === 0) {
        return (str.toUpperCase());
      } else {
        return (str.substr(0, 1) + ' ' + str.substr(1).toUpperCase());
      }
    });
    return (out);
  }

  public static removeItemsFromArray(array: any, items: any): any {
    let index;
    const tempArray = this.copyArray(array);
    items.forEach(item => {
      index = tempArray.indexOf(item);
      tempArray.splice(index, 1);
    });

    return tempArray;
  }

  public static areObjectsEqual(obj1: any, obj2: any) {
    if (this.isBlankObject(obj1) && this.isBlankObject(obj2)) {
      return true;
    } else {
      return (JSON.stringify(Object.keys(obj1)) == JSON.stringify(Object.keys(obj2)) &&
      JSON.stringify(Object.values(obj1)) == JSON.stringify(Object.values(obj2)))
    }
  }

}
