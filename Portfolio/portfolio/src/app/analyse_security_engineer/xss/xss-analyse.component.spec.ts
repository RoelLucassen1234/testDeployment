import { ComponentFixture, TestBed } from '@angular/core/testing';

import { XssAnalyseComponent } from './xss-analyse.component';

describe('XssAnalyseComponent', () => {
  let component: XssAnalyseComponent;
  let fixture: ComponentFixture<XssAnalyseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ XssAnalyseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(XssAnalyseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
