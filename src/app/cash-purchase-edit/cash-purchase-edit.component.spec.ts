import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashPurchaseEditComponent } from './cash-purchase-edit.component';

describe('CashPurchaseEditComponent', () => {
  let component: CashPurchaseEditComponent;
  let fixture: ComponentFixture<CashPurchaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashPurchaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashPurchaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
