import { TestBed } from '@angular/core/testing';

import { LinkCopyService } from './link-copy.service';

describe('LinkCopyService', () => {
  let service: LinkCopyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LinkCopyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
