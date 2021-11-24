import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReceiptEditComponent } from './purchase-receipt-edit.component';

describe('PurchaseReceiptEditComponent', () => {
  let component: PurchaseReceiptEditComponent;
  let fixture: ComponentFixture<PurchaseReceiptEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReceiptEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseReceiptEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
