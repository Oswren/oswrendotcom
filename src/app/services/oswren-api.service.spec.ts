import { TestBed } from '@angular/core/testing';

import { OswrenApiService } from './oswren-api.service';

describe('OswrenApiService', () => {
  let service: OswrenApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OswrenApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
