import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvlConfigurationComponent } from './uvl-configuration.component';

describe('UvlConfigurationComponent', () => {
  let component: UvlConfigurationComponent;
  let fixture: ComponentFixture<UvlConfigurationComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UvlConfigurationComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvlConfigurationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
