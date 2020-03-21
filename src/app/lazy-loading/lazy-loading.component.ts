import {Component, OnInit} from '@angular/core';
import {EasportService} from '../core/easport.service';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent implements OnInit {

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
  index = 1;

  constructor(private easportService: EasportService) {
  }


  ngOnInit(): void {
  }

  reloadItems(payload) {
    const params = {
      q: 'angular',
      page: payload.page,
      per_page: payload.size
    };
    this.easportService.getItems(params).subscribe(value => {
      this.items = value.items;
      this.totalItems = value.total_count;
      this.totalPages = Math.floor(value.total_count / this.size);
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
