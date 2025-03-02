import { TestBed } from '@angular/core/testing';

import { BeConnectionService } from './be-connection.service';

describe('BeConnectionService', () => {
  let service: BeConnectionService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BeConnectionService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
