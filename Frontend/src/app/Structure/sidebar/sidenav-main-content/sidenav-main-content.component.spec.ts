import { ComponentFixture, TestBed } from '@angular/core/testing';
import { SidenavMainContentComponent } from './sidenav-main-content.component';

describe('SidenavMainContentComponent', () => {
  let component: SidenavMainContentComponent;
  let fixture: ComponentFixture<SidenavMainContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SidenavMainContentComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SidenavMainContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
