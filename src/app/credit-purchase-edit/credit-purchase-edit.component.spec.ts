import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditPurchaseEditComponent } from './credit-purchase-edit.component';

describe('CreditPurchaseEditComponent', () => {
  let component: CreditPurchaseEditComponent;
  let fixture: ComponentFixture<CreditPurchaseEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditPurchaseEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditPurchaseEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
