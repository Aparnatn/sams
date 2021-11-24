import { ComponentFixture, TestBed } from '@angular/core/testing';

import { JobStatementComponent } from './job-statement.component';

describe('JobStatementComponent', () => {
  let component: JobStatementComponent;
  let fixture: ComponentFixture<JobStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ JobStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(JobStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
