import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextEditorOptionsComponent } from './text-editor-options.component';

describe('TextEditorOptionsComponent', () => {
  let component: TextEditorOptionsComponent;
  let fixture: ComponentFixture<TextEditorOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextEditorOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextEditorOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
