import { ComponentFixture, TestBed } from '@angular/core/testing';

import { UvlConfigurationOptionsComponent } from './uvl-configuration-options.component';

describe('UvlConfigurationOptionsComponent', () => {
  let component: UvlConfigurationOptionsComponent;
  let fixture: ComponentFixture<UvlConfigurationOptionsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [UvlConfigurationOptionsComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(UvlConfigurationOptionsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
