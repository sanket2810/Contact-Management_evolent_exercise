import {ElementRef, AfterViewInit, OnDestroy, EventEmitter, Renderer} from '@angular/core';
import {DomHandler} from '../dom/domhandler';
import {ControlValueAccessor} from '@angular/forms';
export declare const SLIDER_VALUE_ACCESSOR: any;
export declare class Slider implements AfterViewInit, OnDestroy, ControlValueAccessor {
  el: ElementRef;
  domHandler: DomHandler;
  renderer: Renderer;
  animate: boolean;
  disabled: boolean;
  min: number;
  max: number;
  orientation: string;
  step: number;
  range: boolean;
  style: any;
  styleClass: string;
  onChange: EventEmitter<any>;
  onSlideEnd: EventEmitter<any>;
  value: number;
  values: number;
  handleValue: number;
  handleValues: number[];
  onModelChange: Function;
  onModelTouched: Function;
  dragging: boolean;
  dragListener: any;
  mouseupListener: any;
  initX: number;
  initY: number;
  barWidth: number;
  barHeight: number;
  sliderHandleClick: boolean;
  handleIndex: number;

  constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer);

  onMouseDown(event: Event, index?: number): void;

  onBarClick(event: any): void;

  ngAfterViewInit(): void;

  handleChange(event: Event): void;

  handleStepChange(newValue: number, oldValue: number): void;

  writeValue(value: any): void;

  registerOnChange(fn: Function): void;

  registerOnTouched(fn: Function): void;

  setDisabledState(val: boolean): void;

  updateDomData(): void;

  calculateHandleValue(event: any): number;

  updateHandleValue(): void;

  updateValue(val: number, event?: Event): void;

  getValueFromHandle(handleValue: number): number;

  ngOnDestroy(): void;
}
export declare class SliderModule {
}
