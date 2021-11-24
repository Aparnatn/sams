import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierInvoReceiptComponent } from './supplier-invo-receipt.component';

describe('SupplierInvoReceiptComponent', () => {
  let component: SupplierInvoReceiptComponent;
  let fixture: ComponentFixture<SupplierInvoReceiptComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierInvoReceiptComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierInvoReceiptComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
