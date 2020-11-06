import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GroupprojectComponent } from './groupproject.component';

describe('GroupprojectComponent', () => {
  let component: GroupprojectComponent;
  let fixture: ComponentFixture<GroupprojectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GroupprojectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GroupprojectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
