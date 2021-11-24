import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReceiptsComponent } from './purchase-receipts.component';

describe('PurchaseReceiptsComponent', () => {
  let component: PurchaseReceiptsComponent;
  let fixture: ComponentFixture<PurchaseReceiptsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReceiptsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseReceiptsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
