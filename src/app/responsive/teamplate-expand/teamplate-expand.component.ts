import { Component, OnInit } from '@angular/core';
import {DataTableResource} from 'ngm-data-table';
import {Subscription} from 'rxjs';
import {EasportService} from '../../core/easport.service';
import items from '../../resource/data-table-demo';

@Component({
  selector: 'app-teamplate-expand',
  templateUrl: './teamplate-expand.component.html',
  styleUrls: ['./teamplate-expand.component.scss']
})
export class TeamplateExpandComponent implements OnInit {

  itemResource = new DataTableResource(items);
  items = [];
  totalItems = 10;
  totalPages = 10;
  size = 10;
  column = {
    providerType: false,
    applicationType: false,
    multiExpandableRows: false,
    selectColumn: false,
    indexColumn: false
  };
  public busy: Subscription;

  constructor(private easportService: EasportService) {
  }


  ngOnInit(): void {
  }

  reloadItems(payload): void {
    this.itemResource.query(payload).then(value => {
      this.items = value;
    });
  }

  // special properties:
  rowClick(rowEvent) {
    console.log('Clicked: ' + rowEvent.row.item.full_name);
  }

  rowDoubleClick(rowEvent) {
    // alert('Double clicked: ' + rowEvent.row.item.name);
  }

  rowTooltip(item) {
    return item.full_name;
  }

}
