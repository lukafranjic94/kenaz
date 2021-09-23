import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarFacebookComponent } from './sidebar-facebook.component';

describe('SidebarFacebookComponent', () => {
  let component: SidebarFacebookComponent;
  let fixture: ComponentFixture<SidebarFacebookComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarFacebookComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarFacebookComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
