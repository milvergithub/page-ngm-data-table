import {Component, OnDestroy, OnInit} from '@angular/core';
import {EasportService} from '../core/easport.service';
import {Subscription} from 'rxjs';
import {Utils} from '../core/utils';
import {ToastrService} from 'ngx-toastr';

@Component({
  selector: 'app-lazy-loading',
  templateUrl: './lazy-loading.component.html',
  styleUrls: ['./lazy-loading.component.scss']
})
export class LazyLoadingComponent implements OnInit, OnDestroy {

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

  constructor(private easportService: EasportService,
              private toastr: ToastrService) {
  }


  ngOnInit(): void {
  }

  reloadItems(payload) {
    const params = {
      q: 'angular',
      page: payload.page + 1,
      per_page: payload.size
    };
    this.busy = this.easportService.getItems(params).subscribe(value => {
      this.items = value.items;
      this.totalItems = value.total_count;
      this.totalPages = 100;
    }, (error => {
      console.log(Utils.extractError(error));
      this.toastr.error(Utils.extractError(error), 'ERROR: ');
    }));
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

  ngOnDestroy(): void {
    if (this.busy) {
      this.busy.unsubscribe();
    }
  }

}
