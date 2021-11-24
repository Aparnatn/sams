import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerOutstandingComponent } from './customer-outstanding.component';

describe('CustomerOutstandingComponent', () => {
  let component: CustomerOutstandingComponent;
  let fixture: ComponentFixture<CustomerOutstandingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerOutstandingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerOutstandingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
