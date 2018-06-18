import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NavBarConnectComponent } from './nav-bar-connect.component';

describe('NavBarConnectComponent', () => {
  let component: NavBarConnectComponent;
  let fixture: ComponentFixture<NavBarConnectComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NavBarConnectComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NavBarConnectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
