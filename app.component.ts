import {
  Component,
  OnInit,
  ViewChild,
  TemplateRef,
  Inject,
} from '@angular/core';
import { data } from './data';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
})
export class AppComponent implements OnInit {
  public data: Object[];
  public initialPage: Object;
  public initColumns = [
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
  public newColumns = [
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
  ];

  public columns = [];

  @ViewChild('grid') gridObj: GridComponent;

  ngOnInit(): void {
    this.data = data;
    this.initialPage = { pageSizes: true, pageCount: 4 };
    this.columns = this.initColumns;
  }

  onClick(acc: string) {
    if (acc === 'Add') {
      this.columns = [...this.initColumns, ...this.newColumns];
      this.gridObj.refreshColumns();
    } else {
      this.columns = this.initColumns;
    }
  }
}
