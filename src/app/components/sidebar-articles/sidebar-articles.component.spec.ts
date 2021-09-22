import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarArticlesComponent } from './sidebar-articles.component';

describe('SidebarArticlesComponent', () => {
  let component: SidebarArticlesComponent;
  let fixture: ComponentFixture<SidebarArticlesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SidebarArticlesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SidebarArticlesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
