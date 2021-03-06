import {
  ElementRef,
  OnDestroy,
  DoCheck,
  EventEmitter,
  IterableDiffers,
  OnInit,
  OnChanges,
  AfterViewChecked,
  SimpleChanges
} from '@angular/core';
export declare class Schedule implements DoCheck, OnDestroy, OnInit, OnChanges, AfterViewChecked {
  el: ElementRef;
  events: any[];
  header: any;
  style: any;
  styleClass: string;
  rtl: boolean;
  weekends: boolean;
  hiddenDays: number[];
  fixedWeekCount: boolean;
  weekNumbers: boolean;
  businessHours: any;
  height: any;
  contentHeight: any;
  aspectRatio: number;
  eventLimit: any;
  defaultDate: any;
  editable: boolean;
  droppable: boolean;
  eventStartEditable: boolean;
  eventDurationEditable: boolean;
  defaultView: string;
  allDaySlot: boolean;
  allDayText: string;
  slotDuration: any;
  slotLabelInterval: any;
  snapDuration: any;
  scrollTime: any;
  minTime: any;
  maxTime: any;
  slotEventOverlap: boolean;
  nowIndicator: boolean;
  dragRevertDuration: number;
  dragOpacity: number;
  dragScroll: boolean;
  eventOverlap: any;
  eventConstraint: any;
  locale: string;
  timezone: boolean | string;
  eventRender: Function;
  dayRender: Function;
  options: any;
  onDayClick: EventEmitter<any>;
  onDrop: EventEmitter<any>;
  onEventClick: EventEmitter<any>;
  onEventMouseover: EventEmitter<any>;
  onEventMouseout: EventEmitter<any>;
  onEventDragStart: EventEmitter<any>;
  onEventDragStop: EventEmitter<any>;
  onEventDrop: EventEmitter<any>;
  onEventResizeStart: EventEmitter<any>;
  onEventResizeStop: EventEmitter<any>;
  onEventResize: EventEmitter<any>;
  onViewRender: EventEmitter<any>;
  initialized: boolean;
  stopNgOnChangesPropagation: boolean;
  differ: any;
  schedule: any;
  config: any;

  constructor(el: ElementRef, differs: IterableDiffers);

  ngOnInit(): void;

  ngAfterViewChecked(): void;

  initialize(): void;

  ngOnChanges(changes: SimpleChanges): void;

  ngDoCheck(): void;

  ngOnDestroy(): void;

  gotoDate(date: any): void;

  prev(): void;

  next(): void;

  prevYear(): void;

  nextYear(): void;

  today(): void;

  incrementDate(duration: any): void;

  changeView(viewName: string): void;

  getDate(): any;

  findEvent(id: string): any;

  updateEvent(event: any): void;
}
export declare class ScheduleModule {
}
