import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Inject,
} from '@angular/core';
import { data1, data2 } from './data';
import { GridComponent } from '@syncfusion/ej2-angular-grids';
import { ChangeDetectionStrategy } from '@angular/compiler/src/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['./app.component.css'],
  changeDetection: ChangeDetectionStrategy.Default,
})
export class AppComponent implements OnInit {
  public columns1 = [
    {
      field: 'A',
      headerText: 'Column A',
      width: '100',
    },
    {
      field: 'B',
      headerText: 'Column B',
      width: '100',
    },
    {
      field: 'C',
      headerText: 'Column C',
      width: '100',
    },
  ];
  public columns2 = [
    {
      field: 'A',
      headerText: 'Column A',
      width: '100',
    },
    {
      field: 'D',
      headerText: 'Column D',
      width: '100',
    },
    {
      field: 'E',
      headerText: 'Column E',
      width: '100',
    },
    {
      field: 'F',
      headerText: 'Column F',
      width: '100',
    },
    {
      field: 'G',
      headerText: 'Column G',
      width: '100',
    },
    {
      field: 'H',
      headerText: 'Column H',
      width: '100',
    },
  ];

  public data: Object[];
  public columns = [];
  private toggle = false;

  @ViewChild('grid') gridObj: GridComponent;

  ngOnInit(): void {
    this.data = data1;
    this.columns = this.columns1;
  }

  onClick() {
    this.toggle = !this.toggle;
    if (this.toggle) {
      this.data = data2;
      this.columns = this.columns2;
    } else {
      this.data = data1;
      this.columns = this.columns1;
    }
    setTimeout(() => {
      this.gridObj.refreshColumns();
    }, 0);
  }

  sortComparer(a: Cell, b: Cell) {
    return a.value.localeCompare(b.value);
  }
}

export interface Cell {
  value: string;
  color?: string;
}