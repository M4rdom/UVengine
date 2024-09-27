import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AutoDockerComponent } from './auto-docker.component';

describe('AutoDockerComponent', () => {
  let component: AutoDockerComponent;
  let fixture: ComponentFixture<AutoDockerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [AutoDockerComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(AutoDockerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
