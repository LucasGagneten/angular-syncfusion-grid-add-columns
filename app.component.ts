import { Component, OnInit, ViewChild, TemplateRef, Inject  } from '@angular/core';
import { data } from './data';
import { GridComponent } from '@syncfusion/ej2-angular-grids';

@Component({
    selector: 'app-root',
    templateUrl: 'app.component.html'
})
export class AppComponent {
    public data: Object[];
    public initialPage: Object; 
    public columns;
    public newColumns;
    public flag = true;
    @ViewChild('grid') gridObj: GridComponent;
    @ViewChild('template') template: TemplateRef<{}>;

    ngOnInit(): void {
        this.data = data;
        this.initialPage = { pageSizes: true, pageCount: 4 };
        this.columns = [
          {
            field: 'OrderID',
            headerText: 'Order ID',
            width: '100'
          },
          {
            field: 'CustomerName',
            headerText: 'Customer Name',
            width: '120'
          },
          {
            field: 'ShipCity',
            headerText: 'Ship City',
            width: '120'
          }
        ]
        this.newColumns = [
          {
            field: 'ShipCountry',
            headerText: 'Ship Country',
            width: '120',
            template: this.template
          },
          {
            field: 'ShipName',
            headerText: 'Ship Name',
            width: '140'
          }
        ]
    }

    onClick() {
      if (this.flag) {
      this.newColumns.forEach(column=> {
        column.template = this.template;
        this.gridObj.columns.push(column);
      });
      this.gridObj.refreshColumns();
      this.flag = false;
      }
    } 
}