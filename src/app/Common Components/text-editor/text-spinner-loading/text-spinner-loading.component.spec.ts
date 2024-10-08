import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TextSpinnerLoadingComponent } from './text-spinner-loading.component';

describe('TextSpinnerLoadingComponent', () => {
  let component: TextSpinnerLoadingComponent;
  let fixture: ComponentFixture<TextSpinnerLoadingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TextSpinnerLoadingComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(TextSpinnerLoadingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
