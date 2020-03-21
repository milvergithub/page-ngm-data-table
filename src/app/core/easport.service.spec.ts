import { TestBed } from '@angular/core/testing';

import { EasportService } from './easport.service';

describe('EasportService', () => {
  let service: EasportService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(EasportService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
