import { TestBed } from '@angular/core/testing';

import { AssetrequestService } from './assetrequest.service';

describe('AssetrequestService', () => {
  let service: AssetrequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetrequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
