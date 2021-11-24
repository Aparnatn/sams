import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreditSaleEditComponent } from './credit-sale-edit.component';

describe('CreditSaleEditComponent', () => {
  let component: CreditSaleEditComponent;
  let fixture: ComponentFixture<CreditSaleEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CreditSaleEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CreditSaleEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
