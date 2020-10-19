import { TestBed } from '@angular/core/testing';

import { SerrService } from './serr.service';

describe('SerrService', () => {
  let service: SerrService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SerrService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
