import {ElementRef, OnInit, EventEmitter} from '@angular/core';
import {DomHandler} from '../dom/domhandler';
import {ControlValueAccessor} from '@angular/forms';
export declare const SPINNER_VALUE_ACCESSOR: any;
export declare class Spinner implements OnInit, ControlValueAccessor {
  el: ElementRef;
  domHandler: DomHandler;
  onChange: EventEmitter<any>;
  step: number;
  min: number;
  max: number;
  maxlength: number;
  size: number;
  placeholder: string;
  disabled: boolean;
  readonly: boolean;
  decimalSeparator: string;
  thousandSeparator: string;
  tabindex: number;
  formatInput: boolean;
  value: number;
  valueAsString: string;
  onModelChange: Function;
  onModelTouched: Function;
  keyPattern: RegExp;
  precision: number;
  timer: any;
  focus: boolean;
  filled: boolean;

  constructor(el: ElementRef, domHandler: DomHandler);

  ngOnInit(): void;

  repeat(interval: number, dir: number): void;

  spin(dir: number): void;

  toFixed(value: number, precision: number): string;

  onUpButtonMousedown(event: Event, input: HTMLInputElement): void;

  onUpButtonMouseup(event: Event): void;

  onUpButtonMouseleave(event: Event): void;

  onDownButtonMousedown(event: Event, input: HTMLInputElement): void;

  onDownButtonMouseup(event: Event): void;

  onDownButtonMouseleave(event: Event): void;

  onInputKeydown(event: KeyboardEvent): void;

  onInputKeyPress(event: KeyboardEvent): void;

  onInput(event: Event, inputValue: string): void;

  onBlur(): void;

  onFocus(): void;

  parseValue(val: string): number;

  formatValue(): void;

  handleChange(event: Event): void;

  clearTimer(): void;

  writeValue(value: any): void;

  registerOnChange(fn: Function): void;

  registerOnTouched(fn: Function): void;

  setDisabledState(val: boolean): void;

  updateFilledState(): void;
}
export declare class SpinnerModule {
}
