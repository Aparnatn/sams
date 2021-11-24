import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SaleReturnEditComponent } from './sale-return-edit.component';

describe('SaleReturnEditComponent', () => {
  let component: SaleReturnEditComponent;
  let fixture: ComponentFixture<SaleReturnEditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SaleReturnEditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SaleReturnEditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
