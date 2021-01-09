import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RandDProjectComponent } from './rand-dproject.component';

describe('RandDProjectComponent', () => {
  let component: RandDProjectComponent;
  let fixture: ComponentFixture<RandDProjectComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ RandDProjectComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(RandDProjectComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
