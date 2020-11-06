import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ResearchBsnComponent } from './research-bsn.component';

describe('ResearchBsnComponent', () => {
  let component: ResearchBsnComponent;
  let fixture: ComponentFixture<ResearchBsnComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ResearchBsnComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ResearchBsnComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
