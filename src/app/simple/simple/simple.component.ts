import { Component, OnInit } from '@angular/core';
import {Subscription} from 'rxjs';
import {EasportService} from '../../core/easport.service';
import {DataTableResource} from 'ngm-data-table';
import items from '../../resource/data-table-demo';

@Component({
  selector: 'app-simple',
  templateUrl: './simple.component.html',
  styleUrls: ['./simple.component.scss']
})
export class SimpleComponent implements OnInit {

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
    const data = {
      accountId: 'x1UgAbcYcCIEXz1y1Y7trg==',
      authorizationId: 'gv2AkR44xmtseFXSHSNv9w=='
    };

    fetch('http://test.bnb.com.bo/ClientAuthentication.API/api/v1/auth/token', {
      method: 'POST', // or 'PUT'
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(data),
    })
      .then(response => response.json())
      // tslint:disable-next-line:no-shadowed-variable
      .then(data => console.log('Success:', data))
      .catch((error) => {
        console.error('Error:', error);
      });
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
