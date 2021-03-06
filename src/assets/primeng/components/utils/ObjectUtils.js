"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
Object.defineProperty(exports, "__esModule", {value: true});
var core_1 = require("@angular/core");
var ObjectUtils = (function () {
  function ObjectUtils() {
  }

  ObjectUtils.prototype.equals = function (obj1, obj2) {
    if (obj1 == null && obj2 == null) {
      return true;
    }
    if (obj1 == null || obj2 == null) {
      return false;
    }
    if (obj1 == obj2) {
      delete obj1._$visited;
      return true;
    }
    if (typeof obj1 == 'object' && typeof obj2 == 'object') {
      obj1._$visited = true;
      for (var p in obj1) {
        if (p === "_$visited")
          continue;
        if (obj1.hasOwnProperty(p) !== obj2.hasOwnProperty(p)) {
          return false;
        }
        switch (typeof (obj1[p])) {
          case 'object':
            if (obj1[p] && obj1[p]._$visited || !this.equals(obj1[p], obj2[p]))
              return false;
            break;
          case 'function':
            if (typeof (obj2[p]) == 'undefined' || (p != 'compare' && obj1[p].toString() != obj2[p].toString()))
              return false;
            break;
          default:
            if (obj1[p] != obj2[p])
              return false;
            break;
        }
      }
      for (var p in obj2) {
        if (typeof (obj1[p]) == 'undefined')
          return false;
      }
      delete obj1._$visited;
      return true;
    }
    return false;
  };
  ObjectUtils.prototype.resolveFieldData = function (data, field) {
    if (data && field) {
      if (field.indexOf('.') == -1) {
        return data[field];
      }
      else {
        var fields = field.split('.');
        var value = data;
        for (var i = 0, len = fields.length; i < len; ++i) {
          if (value == null) {
            return null;
          }
          value = value[fields[i]];
        }
        return value;
      }
    }
    else {
      return null;
    }
  };
  return ObjectUtils;
}());
ObjectUtils = __decorate([
  core_1.Injectable()
], ObjectUtils);
exports.ObjectUtils = ObjectUtils;
//# sourceMappingURL=ObjectUtils.js.map
