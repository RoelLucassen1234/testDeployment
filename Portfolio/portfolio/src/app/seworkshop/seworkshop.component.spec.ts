import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SEworkshopComponent } from './seworkshop.component';

describe('SEworkshopComponent', () => {
  let component: SEworkshopComponent;
  let fixture: ComponentFixture<SEworkshopComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SEworkshopComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SEworkshopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
