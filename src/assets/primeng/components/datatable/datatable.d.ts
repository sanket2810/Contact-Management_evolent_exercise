import {
  ElementRef,
  AfterContentInit,
  AfterViewInit,
  AfterViewChecked,
  OnInit,
  OnDestroy,
  DoCheck,
  ViewContainerRef,
  EventEmitter,
  Renderer,
  IterableDiffers,
  QueryList,
  TemplateRef,
  ChangeDetectorRef
} from '@angular/core';
import {Column, HeaderColumnGroup, FooterColumnGroup, PrimeTemplate} from '../common/shared';
import {LazyLoadEvent, FilterMetadata, SortMeta} from '../common/api';
import {DomHandler} from '../dom/domhandler';
import {ObjectUtils} from '../utils/ObjectUtils';
import {Subscription} from 'rxjs/Subscription';
import {BlockableUI} from '../common/api';
export declare class DTRadioButton {
  checked: boolean;
  onClick: EventEmitter<any>;
  hover: boolean;

  handleClick(event: any): void;
}
export declare class DTCheckbox {
  checked: boolean;
  disabled: boolean;
  onChange: EventEmitter<any>;
  hover: boolean;

  handleClick(event: any): void;
}
export declare class RowExpansionLoader {
  viewContainer: ViewContainerRef;
  template: TemplateRef<any>;
  rowData: any;

  constructor(viewContainer: ViewContainerRef);

  ngOnInit(): void;
}
export declare class ColumnHeaders {
  dt: DataTable;

  constructor(dt: DataTable);

  columns: Column[];
}
export declare class ColumnFooters {
  dt: DataTable;

  constructor(dt: DataTable);

  columns: Column[];
}
export declare class TableBody {
  dt: DataTable;

  constructor(dt: DataTable);

  columns: Column[];

  visibleColumns(): Column[];
}
export declare class ScrollableView implements AfterViewInit, AfterViewChecked, OnDestroy {
  dt: DataTable;
  domHandler: DomHandler;
  el: ElementRef;
  renderer: Renderer;

  constructor(dt: DataTable, domHandler: DomHandler, el: ElementRef, renderer: Renderer);

  columns: Column[];
  scrollHeaderViewChild: ElementRef;
  scrollHeaderBoxViewChild: ElementRef;
  scrollBodyViewChild: ElementRef;
  scrollTableViewChild: ElementRef;
  scrollTableWrapperViewChild: ElementRef;
  scrollFooterViewChild: ElementRef;
  scrollFooterBoxViewChild: ElementRef;
  frozen: boolean;
  width: string;
  virtualScroll: boolean;
  onVirtualScroll: EventEmitter<any>;
  loading: boolean;
  scrollBody: HTMLDivElement;
  scrollHeader: HTMLDivElement;
  scrollHeaderBox: HTMLDivElement;
  scrollTable: HTMLDivElement;
  scrollTableWrapper: HTMLDivElement;
  scrollFooter: HTMLDivElement;
  scrollFooterBox: HTMLDivElement;
  bodyScrollListener: Function;
  headerScrollListener: Function;
  scrollBodyMouseWheelListener: Function;
  scrollFunction: Function;
  rowHeight: number;
  scrollTimeout: any;

  ngAfterViewInit(): void;

  ngAfterViewChecked(): void;

  initScrolling(): void;

  readonly virtualTableHeight: string;

  ngOnDestroy(): void;
}
export declare class DataTable implements AfterViewChecked, AfterViewInit, AfterContentInit, OnInit, DoCheck, OnDestroy, BlockableUI {
  el: ElementRef;
  domHandler: DomHandler;
  renderer: Renderer;
  changeDetector: ChangeDetectorRef;
  objectUtils: ObjectUtils;
  value: any[];
  paginator: boolean;
  rows: number;
  totalRecords: number;
  pageLinks: number;
  rowsPerPageOptions: number[];
  responsive: boolean;
  stacked: boolean;
  selectionMode: string;
  selection: any;
  selectionChange: EventEmitter<any>;
  editable: boolean;
  onRowClick: EventEmitter<any>;
  onRowSelect: EventEmitter<any>;
  onRowUnselect: EventEmitter<any>;
  onRowDblclick: EventEmitter<any>;
  onHeaderCheckboxToggle: EventEmitter<any>;
  onContextMenuSelect: EventEmitter<any>;
  filterDelay: number;
  lazy: boolean;
  onLazyLoad: EventEmitter<any>;
  resizableColumns: boolean;
  columnResizeMode: string;
  onColResize: EventEmitter<any>;
  reorderableColumns: boolean;
  onColReorder: EventEmitter<any>;
  scrollable: boolean;
  virtualScroll: boolean;
  scrollHeight: any;
  scrollWidth: any;
  frozenWidth: any;
  unfrozenWidth: any;
  style: any;
  styleClass: string;
  tableStyle: any;
  tableStyleClass: string;
  globalFilter: any;
  sortMode: string;
  sortField: string;
  sortOrder: number;
  groupField: string;
  multiSortMeta: SortMeta[];
  contextMenu: any;
  csvSeparator: string;
  exportFilename: string;
  emptyMessage: string;
  paginatorPosition: string;
  metaKeySelection: boolean;
  onEditInit: EventEmitter<any>;
  onEditComplete: EventEmitter<any>;
  onEdit: EventEmitter<any>;
  onEditCancel: EventEmitter<any>;
  onPage: EventEmitter<any>;
  onSort: EventEmitter<any>;
  onFilter: EventEmitter<any>;
  header: any;
  footer: any;
  expandableRows: boolean;
  expandedRows: any[];
  expandableRowGroups: boolean;
  rowExpandMode: string;
  expandedRowsGroups: any[];
  tabindex: number;
  rowStyleClass: Function;
  rowGroupMode: string;
  sortableRowGroup: boolean;
  sortFile: string;
  rowHover: boolean;
  first: number;
  filters: {
    [s: string]: FilterMetadata;
  };
  onRowExpand: EventEmitter<any>;
  onRowCollapse: EventEmitter<any>;
  onRowGroupExpand: EventEmitter<any>;
  onRowGroupCollapse: EventEmitter<any>;
  templates: QueryList<PrimeTemplate>;
  cols: QueryList<Column>;
  headerColumnGroup: HeaderColumnGroup;
  footerColumnGroup: FooterColumnGroup;
  dataToRender: any[];
  page: number;
  filterTimeout: any;
  filteredValue: any[];
  columns: Column[];
  frozenColumns: Column[];
  scrollableColumns: Column[];
  columnsChanged: boolean;
  dataChanged: boolean;
  stopSortPropagation: boolean;
  sortColumn: Column;
  columnResizing: boolean;
  lastResizerHelperX: number;
  documentColumnResizeListener: Function;
  documentColumnResizeEndListener: Function;
  resizerHelper: any;
  resizeColumn: any;
  reorderIndicatorUp: any;
  reorderIndicatorDown: any;
  draggedColumn: any;
  dropPosition: number;
  tbody: any;
  rowTouched: boolean;
  rowGroupToggleClick: boolean;
  editingCell: any;
  stopFilterPropagation: boolean;
  rowGroupMetadata: any;
  rowGroupHeaderTemplate: TemplateRef<any>;
  rowGroupFooterTemplate: TemplateRef<any>;
  rowExpansionTemplate: TemplateRef<any>;
  scrollBarWidth: number;
  loading: boolean;
  differ: any;
  globalFilterFunction: any;
  columnsSubscription: Subscription;

  constructor(el: ElementRef, domHandler: DomHandler, differs: IterableDiffers, renderer: Renderer, changeDetector: ChangeDetectorRef, objectUtils: ObjectUtils);

  ngOnInit(): void;

  ngAfterContentInit(): void;

  ngAfterViewChecked(): void;

  ngAfterViewInit(): void;

  ngDoCheck(): void;

  initColumns(): void;

  resolveFieldData(data: any, field: string): any;

  updateRowGroupMetadata(): void;

  updatePaginator(): void;

  paginate(event: any): void;

  updateDataToRender(datasource: any): void;

  onVirtualScroll(event: any): void;

  onHeaderKeydown(event: any, column: Column): void;

  onHeaderMousedown(event: any, header: any): void;

  sort(event: any, column: Column): void;

  sortSingle(): void;

  sortMultiple(): void;

  multisortField(data1: any, data2: any, multiSortMeta: any, index: any): any;

  addSortMeta(meta: any): void;

  isSorted(column: Column): boolean;

  getSortOrder(column: Column): number;

  onRowGroupClick(event: any): void;

  handleRowClick(event: any, rowData: any): void;

  handleRowTouchEnd(event: any): void;

  selectRowWithRadio(event: any, rowData: any): void;

  toggleRowWithCheckbox(event: any, rowData: any): void;

  toggleRowsWithCheckbox(event: any): void;

  onRowRightClick(event: any, rowData: any): void;

  rowDblclick(event: any, rowData: any): void;

  isSingleSelectionMode(): boolean;

  isMultipleSelectionMode(): boolean;

  findIndexInSelection(rowData: any): number;

  isSelected(rowData: any): boolean;

  readonly allSelected: boolean;

  onFilterKeyup(value: any, field: any, matchMode: any): void;

  filter(value: any, field: any, matchMode: any): void;

  isFilterBlank(filter: any): boolean;

  _filter(): void;

  hasFilter(): any;

  onFilterInputClick(event: any): void;

  filterConstraints: {
    startsWith(value: any, filter: any): boolean;
    contains(value: any, filter: any): boolean;
    endsWith(value: any, filter: any): boolean;
    equals(value: any, filter: any): boolean;
    in(value: any, filter: any[]): boolean;
  };

  switchCellToEditMode(cell: any, column: Column, rowData: any): void;

  switchCellToViewMode(element: any): void;

  onCellEditorKeydown(event: any, column: Column, rowData: any, colIndex: number): void;

  findCell(element: any): any;

  initResizableColumns(): void;

  initColumnResize(event: any): void;

  onColumnResize(event: any): void;

  onColumnResizeEnd(event: any): void;

  fixColumnWidths(): void;

  onColumnDragStart(event: any): void;

  onColumnDragover(event: any): void;

  onColumnDragleave(event: any): void;

  onColumnDrop(event: any): void;

  initColumnReordering(): void;

  findParentHeader(element: any): any;

  hasFooter(): boolean;

  isEmpty(): boolean;

  createLazyLoadMetadata(): LazyLoadEvent;

  toggleRow(row: any, event?: Event): void;

  findExpandedRowIndex(row: any): number;

  isRowExpanded(row: any): boolean;

  findExpandedRowGroupIndex(row: any): number;

  isRowGroupExpanded(row: any): boolean;

  toggleRowGroup(event: Event, row: any): void;

  reset(): void;

  exportCSV(): void;

  getBlockableElement(): HTMLElement;

  getRowStyleClass(rowData: any, rowIndex: number): string;

  visibleColumns(): Column[];

  readonly containerWidth: any;

  ngOnDestroy(): void;
}
export declare class DataTableModule {
}
