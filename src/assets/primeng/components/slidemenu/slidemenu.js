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
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) {
      decorator(target, key, paramIndex);
    }
  };
Object.defineProperty(exports, "__esModule", {value: true});
var core_1 = require("@angular/core");
var common_1 = require("@angular/common");
var domhandler_1 = require("../dom/domhandler");
var router_1 = require("@angular/router");
var SlideMenuSub = (function () {
  function SlideMenuSub(slideMenu, router) {
    this.slideMenu = slideMenu;
    this.router = router;
    this.backLabel = 'Back';
    this.easing = 'ease-out';
  }

  SlideMenuSub.prototype.itemClick = function (event, item, listitem) {
    var _this = this;
    if (item.disabled) {
      event.preventDefault();
      return;
    }
    if (!item.url || item.routerLink) {
      event.preventDefault();
    }
    if (item.command) {
      if (!item.eventEmitter && item.command) {
        item.eventEmitter = new core_1.EventEmitter();
        item.eventEmitter.subscribe(item.command);
      }
      item.eventEmitter.emit({
        originalEvent: event,
        item: item
      });
    }
    if (item.items && !this.slideMenu.animating) {
      this.slideMenu.left -= this.slideMenu.menuWidth;
      this.activeItem = listitem;
      this.slideMenu.animating = true;
      setTimeout(function () {
        return _this.slideMenu.animating = false;
      }, this.effectDuration);
    }
    if (item.routerLink) {
      this.router.navigate(item.routerLink);
    }
  };
  SlideMenuSub.prototype.ngOnDestroy = function () {
    this.activeItem = null;
  };
  return SlideMenuSub;
}());
__decorate([
  core_1.Input(),
  __metadata("design:type", Object)
], SlideMenuSub.prototype, "item", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Boolean)
], SlideMenuSub.prototype, "root", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", String)
], SlideMenuSub.prototype, "backLabel", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", String)
], SlideMenuSub.prototype, "menuWidth", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Object)
], SlideMenuSub.prototype, "effectDuration", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", String)
], SlideMenuSub.prototype, "easing", void 0);
SlideMenuSub = __decorate([
  core_1.Component({
    selector: 'p-slideMenuSub',
    template: "\n        <ul [ngClass]=\"{'ui-helper-reset ui-menu-rootlist':root, 'ui-widget-content ui-corner-all ui-helper-clearfix ui-menu-child':!root}\" class=\"ui-menu-list\"\n            [style.width.px]=\"menuWidth\" [style.left.px]=\"root ? slideMenu.left : slideMenu.menuWidth\" \n            [style.transitionProperty]=\"root ? 'left' : 'none'\" [style.transitionDuration]=\"effectDuration + 'ms'\" [style.transitionTimingFunction]=\"easing\">\n            <template ngFor let-child [ngForOf]=\"(root ? item : item.items)\">\n                <li #listitem [ngClass]=\"{'ui-menuitem ui-widget ui-corner-all':true,'ui-menu-parent':child.items,'ui-slidemenuitem-active':listitem==activeItem}\">\n                    <a [href]=\"child.url||'#'\" class=\"ui-menuitem-link ui-corner-all\" [attr.target]=\"child.target\"\n                        [ngClass]=\"{'ui-menuitem-link-parent':child.items,'ui-state-disabled':child.disabled}\" \n                        (click)=\"itemClick($event, child, listitem)\">\n                        <span class=\"ui-submenu-icon fa fa-fw fa-caret-right\" *ngIf=\"child.items\"></span>\n                        <span class=\"ui-menuitem-icon fa fa-fw\" *ngIf=\"child.icon\" [ngClass]=\"child.icon\"></span>\n                        <span class=\"ui-menuitem-text\">{{child.label}}</span>\n                    </a>\n                    <p-slideMenuSub class=\"ui-submenu\" [item]=\"child\" [menuWidth]=\"menuWidth\" *ngIf=\"child.items\"></p-slideMenuSub>\n                </li>\n            </template>\n        </ul>\n    "
  }),
  __param(0, core_1.Inject(core_1.forwardRef(function () {
    return SlideMenu;
  }))),
  __metadata("design:paramtypes", [SlideMenu, router_1.Router])
], SlideMenuSub);
exports.SlideMenuSub = SlideMenuSub;
var SlideMenu = (function () {
  function SlideMenu(el, domHandler, renderer) {
    this.el = el;
    this.domHandler = domHandler;
    this.renderer = renderer;
    this.menuWidth = 200;
    this.viewportHeight = 175;
    this.effectDuration = 500;
    this.easing = 'ease-out';
    this.backLabel = 'Back';
    this.left = 0;
    this.animating = false;
  }

  SlideMenu.prototype.ngAfterViewInit = function () {
    var _this = this;
    this.container = this.containerViewChild.nativeElement;
    this.backwardElement = this.backwardViewChild.nativeElement;
    this.viewportContentHeight = this.viewportHeight - this.domHandler.getHiddenElementOuterHeight(this.backwardElement);
    if (this.popup) {
      this.documentClickListener = this.renderer.listenGlobal('body', 'click', function () {
        if (!_this.preventDocumentDefault) {
          _this.hide();
        }
        _this.preventDocumentDefault = false;
      });
    }
  };
  SlideMenu.prototype.toggle = function (event) {
    if (this.container.offsetParent)
      this.hide();
    else
      this.show(event);
    this.preventDocumentDefault = true;
  };
  SlideMenu.prototype.show = function (event) {
    this.container.style.display = 'block';
    this.domHandler.absolutePosition(this.container, event.target);
    this.domHandler.fadeIn(this.container, 250);
  };
  SlideMenu.prototype.hide = function () {
    this.container.style.display = 'none';
  };
  SlideMenu.prototype.unsubscribe = function (item) {
    if (item.eventEmitter) {
      item.eventEmitter.unsubscribe();
    }
    if (item.items) {
      for (var _i = 0, _a = item.items; _i < _a.length; _i++) {
        var childItem = _a[_i];
        this.unsubscribe(childItem);
      }
    }
  };
  SlideMenu.prototype.onClick = function (event) {
    this.preventDocumentDefault = true;
  };
  SlideMenu.prototype.goBack = function () {
    this.left += this.menuWidth;
  };
  SlideMenu.prototype.ngOnDestroy = function () {
    if (this.documentClickListener) {
      this.documentClickListener();
    }
    if (this.model) {
      for (var _i = 0, _a = this.model; _i < _a.length; _i++) {
        var item = _a[_i];
        this.unsubscribe(item);
      }
    }
  };
  return SlideMenu;
}());
__decorate([
  core_1.Input(),
  __metadata("design:type", Array)
], SlideMenu.prototype, "model", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Boolean)
], SlideMenu.prototype, "popup", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Object)
], SlideMenu.prototype, "style", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", String)
], SlideMenu.prototype, "styleClass", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Number)
], SlideMenu.prototype, "menuWidth", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Number)
], SlideMenu.prototype, "viewportHeight", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", Object)
], SlideMenu.prototype, "effectDuration", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", String)
], SlideMenu.prototype, "easing", void 0);
__decorate([
  core_1.Input(),
  __metadata("design:type", String)
], SlideMenu.prototype, "backLabel", void 0);
__decorate([
  core_1.ViewChild('container'),
  __metadata("design:type", core_1.ElementRef)
], SlideMenu.prototype, "containerViewChild", void 0);
__decorate([
  core_1.ViewChild('backward'),
  __metadata("design:type", core_1.ElementRef)
], SlideMenu.prototype, "backwardViewChild", void 0);
SlideMenu = __decorate([
  core_1.Component({
    selector: 'p-slideMenu',
    template: "\n        <div #container [ngClass]=\"{'ui-menu ui-slidemenu ui-widget ui-widget-content ui-corner-all':true,'ui-menu-dynamic ui-shadow':popup}\" \n            [class]=\"styleClass\" [ngStyle]=\"style\" (click)=\"onClick($event)\">\n            <div class=\"ui-slidemenu-wrapper\" [style.height.px]=\"viewportHeight\">\n                <div class=\"ui-slidemenu-content\" [style.height.px]=\"viewportContentHeight\">\n                    <p-slideMenuSub [item]=\"model\" root=\"root\" [menuWidth]=\"menuWidth\" [effectDuration]=\"effectDuration\" [easing]=\"easing\"></p-slideMenuSub>\n                </div>\n                <div #backward class=\"ui-slidemenu-backward ui-widget-header ui-corner-all\" [style.display]=\"left ? 'block' : 'none'\" (click)=\"goBack()\">\n                    <span class=\"fa fa-fw fa-caret-left\"></span><span>{{backLabel}}</span>\n                </div>\n            </div>\n        </div>\n    ",
    providers: [domhandler_1.DomHandler]
  }),
  __metadata("design:paramtypes", [core_1.ElementRef, domhandler_1.DomHandler, core_1.Renderer])
], SlideMenu);
exports.SlideMenu = SlideMenu;
var SlideMenuModule = (function () {
  function SlideMenuModule() {
  }

  return SlideMenuModule;
}());
SlideMenuModule = __decorate([
  core_1.NgModule({
    imports: [common_1.CommonModule],
    exports: [SlideMenu],
    declarations: [SlideMenu, SlideMenuSub]
  })
], SlideMenuModule);
exports.SlideMenuModule = SlideMenuModule;
//# sourceMappingURL=slidemenu.js.map
