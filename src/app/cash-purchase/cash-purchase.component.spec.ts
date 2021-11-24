import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPurchaseComponent } from './cash-purchase.component';

describe('CashPurchaseComponent', () => {
  let component: CashPurchaseComponent;
  let fixture: ComponentFixture<CashPurchaseComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashPurchaseComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPurchaseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
