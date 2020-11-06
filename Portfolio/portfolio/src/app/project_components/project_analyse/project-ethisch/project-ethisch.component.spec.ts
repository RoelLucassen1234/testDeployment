import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ProjectEthischComponent } from './project-ethisch.component';

describe('ProjectEthischComponent', () => {
  let component: ProjectEthischComponent;
  let fixture: ComponentFixture<ProjectEthischComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ProjectEthischComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ProjectEthischComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
