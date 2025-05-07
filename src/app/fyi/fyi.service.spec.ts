import { TestBed } from '@angular/core/testing';

import { FyiService } from './fyi.service';

describe('FyiService', () => {
  let service: FyiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(FyiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
