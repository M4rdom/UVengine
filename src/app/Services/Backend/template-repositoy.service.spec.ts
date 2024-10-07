import { TestBed } from '@angular/core/testing';

import { TemplateRepositoyService } from '../template-repositoy.service';

describe('TemplateRepositoyService', () => {
  let service: TemplateRepositoyService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TemplateRepositoyService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
