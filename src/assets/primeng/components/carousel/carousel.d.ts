import {
  ElementRef,
  OnInit,
  AfterViewInit,
  AfterViewChecked,
  EventEmitter,
  DoCheck,
  OnDestroy,
  IterableDiffers,
  TemplateRef,
  QueryList,
  Renderer
} from '@angular/core';
import {DomHandler} from '../dom/domhandler';
export declare class Carousel implements OnInit, AfterViewChecked, AfterViewInit, DoCheck, OnDestroy {
  el: ElementRef;
  domHandler: DomHandler;
  renderer: Renderer;
  value: any[];
  numVisible: number;
  firstVisible: number;
  headerText: string;
  circular: boolean;
  breakpoint: number;
  responsive: boolean;
  autoplayInterval: number;
  effectDuration: any;
  easing: string;
  pageLinks: number;
  style: any;
  styleClass: string;
  onPage: EventEmitter<any>;
  templates: QueryList<any>;
  itemTemplate: TemplateRef<any>;
  container: any;
  left: any;
  viewport: any;
  itemsContainer: any;
  items: any;
  columns: any;
  page: number;
  valuesChanged: any;
  interval: any;
  anchorPageLinks: any[];
  mobileDropdownOptions: any[];
  selectDropdownOptions: any[];
  shrinked: boolean;
  documentResponsiveListener: any;
  differ: any;

  constructor(el: ElementRef, domHandler: DomHandler, differs: IterableDiffers, renderer: Renderer);

  ngAfterContentInit(): void;

  ngDoCheck(): void;

  ngAfterViewChecked(): void;

  ngOnInit(): void;

  ngAfterViewInit(): void;

  updateLinks(): void;

  updateDropdown(): void;

  updateMobileDropdown(): void;

  render(): void;

  calculateItemWidths(): void;

  onNextNav(): void;

  onPrevNav(): void;

  setPageWithLink(event: any, p: number): void;

  setPage(p: any, enforce?: boolean): void;

  onDropdownChange(val: string): void;

  readonly displayPageLinks: boolean;
  readonly displayPageDropdown: boolean;
  readonly totalPages: number;

  routerDisplay(): boolean;

  updateState(): void;

  startAutoplay(): void;

  stopAutoplay(): void;

  ngOnDestroy(): void;
}
export declare class CarouselModule {
}
