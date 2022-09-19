import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SidebarContentComponent } from './sidebar-content.component';

describe('SidebarContentComponent', () => {
  let component: SidebarContentComponent;
  let fixture: ComponentFixture<SidebarContentComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [SidebarContentComponent],
    }).compileComponents();

    fixture = TestBed.createComponent(SidebarContentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
