import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RedvsblueComponent } from './redvsblue.component';

describe('RedvsblueComponent', () => {
  let component: RedvsblueComponent;
  let fixture: ComponentFixture<RedvsblueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RedvsblueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RedvsblueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
