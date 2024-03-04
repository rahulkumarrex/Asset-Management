import { TestBed } from '@angular/core/testing';

import { AssetauditService } from './assetaudit.service';

describe('AssetauditService', () => {
  let service: AssetauditService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AssetauditService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
