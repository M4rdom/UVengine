import { TestBed } from '@angular/core/testing';

import { TextEditorContentManagerService } from './text-editor-content-manager.service';

describe('TextEditorContentManagerService', () => {
  let service: TextEditorContentManagerService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TextEditorContentManagerService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
