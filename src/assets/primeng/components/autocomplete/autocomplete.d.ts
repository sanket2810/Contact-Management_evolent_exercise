import {
  ElementRef,
  AfterViewInit,
  AfterViewChecked,
  DoCheck,
  EventEmitter,
  QueryList,
  TemplateRef,
  IterableDiffers,
  Renderer
} from '@angular/core';
import {DomHandler} from '../dom/domhandler';
import {ObjectUtils} from '../utils/ObjectUtils';
import {ControlValueAccessor} from '@angular/forms';
export declare const AUTOCOMPLETE_VALUE_ACCESSOR: any;
export declare class AutoComplete implements AfterViewInit, DoCheck, AfterViewChecked, ControlValueAccessor {
  el: ElementRef;
  domHandler: DomHandler;
  renderer: Renderer;
  objectUtils: ObjectUtils;
  minLength: number;
  delay: number;
  style: any;
  styleClass: string;
  inputStyle: any;
  inputStyleClass: string;
  placeholder: string;
  readonly: boolean;
  disabled: boolean;
  maxlength: number;
  size: number;
  suggestions: any[];
  appendTo: any;
  completeMethod: EventEmitter<any>;
  onSelect: EventEmitter<any>;
  onUnselect: EventEmitter<any>;
  onFocus: EventEmitter<any>;
  onBlur: EventEmitter<any>;
  onDropdownClick: EventEmitter<any>;
  field: string;
  scrollHeight: string;
  dropdown: boolean;
  multiple: boolean;
  tabindex: number;
  templates: QueryList<any>;
  itemTemplate: TemplateRef<any>;
  selectedItemTemplate: TemplateRef<any>;
  value: any;
  onModelChange: Function;
  onModelTouched: Function;
  timeout: any;
  differ: any;
  panel: any;
  input: any;
  multipleContainer: any;
  panelVisible: boolean;
  documentClickListener: any;
  suggestionsUpdated: boolean;
  highlightOption: any;
  highlightOptionChanged: boolean;
  focus: boolean;
  dropdownFocus: boolean;
  filled: boolean;
  inputEL: ElementRef;
  multiInputEL: ElementRef;

  constructor(el: ElementRef, domHandler: DomHandler, differs: IterableDiffers, renderer: Renderer, objectUtils: ObjectUtils);

  ngDoCheck(): void;

  ngAfterContentInit(): void;

  ngAfterViewInit(): void;

  ngAfterViewChecked(): void;

  writeValue(value: any): void;

  registerOnChange(fn: Function): void;

  registerOnTouched(fn: Function): void;

  setDisabledState(val: boolean): void;

  onInput(event: any): void;

  search(event: any, query: string): void;

  selectItem(option: any): void;

  show(): void;

  align(): void;

  hide(): void;

  handleDropdownClick(event: any): void;

  removeItem(item: any): void;

  onKeydown(event: any): void;

  onInputFocus(event: any): void;

  onInputBlur(event: any): void;

  onDropdownFocus(): void;

  onDropdownBlur(): void;

  isSelected(val: any): boolean;

  findOptionIndex(option: any): number;

  updateFilledState(): void;

  ngOnDestroy(): void;
}
export declare class AutoCompleteModule {
}
