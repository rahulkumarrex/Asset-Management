import { TestBed } from '@angular/core/testing';

import { AssetservicerequestService } from './assetservicerequest.service';

describe('AssetservicerequestService', () => {
  let service: AssetservicerequestService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetservicerequestService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
