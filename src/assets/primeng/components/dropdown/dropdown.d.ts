import {
  ElementRef,
  OnInit,
  AfterViewInit,
  AfterContentInit,
  AfterViewChecked,
  DoCheck,
  OnDestroy,
  Renderer,
  EventEmitter,
  QueryList,
  TemplateRef,
  IterableDiffers,
  ChangeDetectorRef
} from '@angular/core';
import {SelectItem} from '../common/api';
import {DomHandler} from '../dom/domhandler';
import {ObjectUtils} from '../utils/ObjectUtils';
import {ControlValueAccessor} from '@angular/forms';
export declare const DROPDOWN_VALUE_ACCESSOR: any;
export declare class Dropdown implements OnInit, AfterViewInit, AfterContentInit, AfterViewChecked, DoCheck, OnDestroy, ControlValueAccessor {
  el: ElementRef;
  domHandler: DomHandler;
  renderer: Renderer;
  private cd;
  objectUtils: ObjectUtils;
  options: SelectItem[];
  scrollHeight: string;
  filter: boolean;
  style: any;
  panelStyle: any;
  styleClass: string;
  panelStyleClass: string;
  disabled: boolean;
  readonly: boolean;
  autoWidth: boolean;
  required: boolean;
  editable: boolean;
  appendTo: any;
  tabindex: number;
  placeholder: string;
  onChange: EventEmitter<any>;
  onFocus: EventEmitter<any>;
  onBlur: EventEmitter<any>;
  containerViewChild: ElementRef;
  panelViewChild: ElementRef;
  itemsWrapperViewChild: ElementRef;
  filterViewChild: ElementRef;
  templates: QueryList<any>;
  itemTemplate: TemplateRef<any>;
  selectedOption: SelectItem;
  value: any;
  onModelChange: Function;
  onModelTouched: Function;
  optionsToDisplay: SelectItem[];
  hover: boolean;
  focus: boolean;
  differ: any;
  panelVisible: boolean;
  documentClickListener: any;
  optionsChanged: boolean;
  panel: HTMLDivElement;
  container: HTMLDivElement;
  itemsWrapper: HTMLDivElement;
  initialized: boolean;
  selfClick: boolean;
  itemClick: boolean;
  hoveredItem: any;
  selectedOptionUpdated: boolean;

  constructor(el: ElementRef, domHandler: DomHandler, renderer: Renderer, differs: IterableDiffers, cd: ChangeDetectorRef, objectUtils: ObjectUtils);

  ngAfterContentInit(): void;

  ngOnInit(): void;

  ngDoCheck(): void;

  ngAfterViewInit(): void;

  readonly label: string;
  readonly editableLabel: string;

  onItemClick(event: any, option: any): void;

  selectItem(event: any, option: any): void;

  ngAfterViewChecked(): void;

  writeValue(value: any): void;

  resetFilter(): void;

  updateSelectedOption(val: any): void;

  registerOnChange(fn: Function): void;

  registerOnTouched(fn: Function): void;

  setDisabledState(val: boolean): void;

  updateDimensions(): void;

  onMouseclick(event: any, input: any): void;

  onEditableInputClick(event: any): void;

  onEditableInputFocus(event: any): void;

  onEditableInputChange(event: any): void;

  show(panel: any, container: any): void;

  hide(): void;

  onInputFocus(event: any): void;

  onInputBlur(event: any): void;

  onKeydown(event: any): void;

  findListItem(element: any): any;

  findOptionIndex(val: any, opts: SelectItem[]): number;

  findOption(val: any, opts: SelectItem[]): SelectItem;

  onFilter(event: any): void;

  applyFocus(): void;

  bindDocumentClickListener(): void;

  unbindDocumentClickListener(): void;

  ngOnDestroy(): void;
}
export declare class DropdownModule {
}
