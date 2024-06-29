import { Component, Input } from '@angular/core';
import { $FIX_ME } from 'app/types/fix_me.type';
import { COLUMN } from './type/table-column';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
})
export class TableComponent {
  @Input() loading: boolean = false;
  @Input() data: $FIX_ME = false;
  @Input({
    required: true,
  })
  column: COLUMN[] = [];

  getValueByAccessorKey(row: any, accessorKey: string): string {
    const keys = accessorKey.split('.');
    let value = row;
    for (const key of keys) {
      if (value) {
        value = value[key];
      } else {
        return '';
      }
    }
    return value;
  }
}
