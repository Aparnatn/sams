import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PurchaseReturnEditComponent } from './purchase-return-edit.component';

describe('PurchaseReturnEditComponent', () => {
  let component: PurchaseReturnEditComponent;
  let fixture: ComponentFixture<PurchaseReturnEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PurchaseReturnEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PurchaseReturnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
