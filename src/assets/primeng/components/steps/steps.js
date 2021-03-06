"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
  };
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
  };
Object.defineProperty(exports, "__esModule", {value: true});
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var router_1 = require("@angular/router");
var Steps = (function () {
  function Steps(router) {
    this.router = router;
    this.activeIndex = 0;
    this.readonly = true;
    this.activeIndexChange = new core_1.EventEmitter();
  }

  Steps.prototype.itemClick = function (event, item, i) {
    if (this.readonly) {
      return;
    }
    this.activeIndexChange.emit(i);
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url || item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      if (!item.eventEmitter) {
        item.eventEmitter = new core_1.EventEmitter();
        item.eventEmitter.subscribe(item.command);
      }
      item.eventEmitter.emit({
        originalEvent: event,
        item: item,
        index: i
      });
    }
    if (item.routerLink) {
      this.router.navigate(item.routerLink);
    }
  };
  return Steps;
}());
__decorate([
  core_1.Input(),
  __metadata("design:type", Number)
], Steps.prototype, "activeIndex", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Array)
], Steps.prototype, "model", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Boolean)
], Steps.prototype, "readonly", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Object)
], Steps.prototype, "style", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", String)
], Steps.prototype, "styleClass", void 0);
__decorate([
  core_1.Output(),
  __metadata("design:type", core_1.EventEmitter)
], Steps.prototype, "activeIndexChange", void 0);
Steps = __decorate([
  core_1.Component({
    selector: 'p-steps',
    template: "\n        <div [ngClass]=\"{'ui-steps ui-widget ui-helper-clearfix':true,'ui-steps-readonly':readonly}\" [ngStyle]=\"style\" [class]=\"styleClass\">\n            <ul role=\"tablist\">\n                <li *ngFor=\"let item of model; let i = index\" class=\"ui-steps-item\" #menuitem\n                    [ngClass]=\"{'ui-state-highlight':(i === activeIndex),'ui-state-default':(i !== activeIndex),\n                        'ui-state-disabled':(i !== activeIndex && readonly)}\">\n                    <a class=\"ui-menuitem-link\" (click)=\"itemClick($event, item, i)\" [attr.target]=\"item.target\">\n                        <span class=\"ui-steps-number\">{{i + 1}}</span>\n                        <span class=\"ui-steps-title\">{{item.label}}</span>\n                    </a>\n                </li>\n            </ul>\n        </div>\n    "
  }),
  __metadata("design:paramtypes", [router_1.Router])
], Steps);
exports.Steps = Steps;
var StepsModule = (function () {
  function StepsModule() {
  }

  return StepsModule;
}());
StepsModule = __decorate([
  core_1.NgModule({
    imports: [common_1.CommonModule],
    exports: [Steps],
    declarations: [Steps]
  })
], StepsModule);
exports.StepsModule = StepsModule;
//# sourceMappingURL=steps.js.map
