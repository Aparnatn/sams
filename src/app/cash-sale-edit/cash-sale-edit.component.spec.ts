import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CashSaleEditComponent } from './cash-sale-edit.component';

describe('CashSaleEditComponent', () => {
  let component: CashSaleEditComponent;
  let fixture: ComponentFixture<CashSaleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CashSaleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CashSaleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
