import { TestBed } from '@angular/core/testing';

import { ResolveVariabilityService } from './resolve-variability.service';

describe('ResolveVariabilityService', () => {
  let service: ResolveVariabilityService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ResolveVariabilityService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
