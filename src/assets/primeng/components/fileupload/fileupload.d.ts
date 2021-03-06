import {OnInit, EventEmitter, TemplateRef, AfterContentInit, QueryList} from '@angular/core';
import {DomSanitizer} from '@angular/platform-browser';
import {Message} from '../common/api';
export declare class FileUpload implements OnInit, AfterContentInit {
  private sanitizer;
  name: string;
  url: string;
  multiple: boolean;
  accept: string;
  disabled: boolean;
  auto: boolean;
  maxFileSize: number;
  invalidFileSizeMessageSummary: string;
  invalidFileSizeMessageDetail: string;
  style: string;
  styleClass: string;
  previewWidth: number;
  chooseLabel: string;
  uploadLabel: string;
  cancelLabel: string;
  onBeforeUpload: EventEmitter<any>;
  onBeforeSend: EventEmitter<any>;
  onUpload: EventEmitter<any>;
  onError: EventEmitter<any>;
  onClear: EventEmitter<any>;
  onSelect: EventEmitter<any>;
  templates: QueryList<any>;
  files: File[];
  progress: number;
  dragHighlight: boolean;
  msgs: Message[];
  fileTemplate: TemplateRef<any>;
  contentTemplate: TemplateRef<any>;
  toolbarTemplate: TemplateRef<any>;

  constructor(sanitizer: DomSanitizer);

  ngOnInit(): void;

  ngAfterContentInit(): void;

  onChooseClick(event: any, fileInput: any): void;

  onFileSelect(event: any): void;

  validate(file: File): boolean;

  isImage(file: File): boolean;

  onImageLoad(img: any): void;

  upload(): void;

  clear(): void;

  remove(index: number): void;

  hasFiles(): boolean;

  onDragEnter(e: any): void;

  onDragOver(e: any): void;

  onDragLeave(e: any): void;

  onDrop(e: any): void;

  formatSize(bytes: any): string;
}
export declare class FileUploadModule {
}
