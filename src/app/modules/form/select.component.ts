import { Component, Input, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'form-select',
  template: `
    <div class="form-group box-rounded p-1" [formGroup]="formGroup">
      <ng-content select="form-label"></ng-content>
      <ng-select
        class="form-input"
        [closeOnSelect]="closeOnSelect"
        [clearable]="clearable"
        [clearOnBackspace]="clearOnBackspace"
        [loading]="loading"
        [loadingText]="loadingText"
        [hideSelected]="hideSelected"
        [multiple]="multiple"
        [searchable]="searchable"
        [readonly]="readonly"
        [notFoundText]="emptyText"
        [placeholder]="placeholder"
        [tabIndex]="tabIndex"
      >
        <ng-option *ngFor="let item of items" [value]="item.value">
          {{ item.label }}
        </ng-option>
      </ng-select>
    </div>
  `,
  styles: [],
})
export class SelectComponent implements OnInit {
  @Input() name: string;
  @Input() value: string | number;
  @Input() closeOnSelect: boolean;
  @Input() clearable: boolean;
  @Input() clearOnBackspace: boolean;
  @Input() loading: boolean;
  @Input() loadingText: string;
  @Input() hideSelected: boolean;
  @Input() multiple: boolean;
  @Input() searchable: boolean;
  @Input() readonly: boolean;
  @Input() emptyText: string;
  @Input() placeholder: string;
  @Input() tabIndex: number;

  items = [
    { value: 1, label: 'Volvo' },
    { value: 2, label: 'Saab' },
    { value: 3, label: 'Opel' },
    { value: 4, label: 'Audi' },
  ];

  constructor() {
    this.closeOnSelect =
    this.clearable =
    this.clearOnBackspace =
    this.loading =
    this.hideSelected =
    this.multiple =
    this.searchable =
    this.readonly =
      false;
    this.loadingText = this.placeholder = this.emptyText = '';
    this.tabIndex = 1;
  }

  formGroup: FormGroup;

  ngOnInit(): void {}
}
