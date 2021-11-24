import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierOutstandComponent } from './supplier-outstand.component';

describe('SupplierOutstandComponent', () => {
  let component: SupplierOutstandComponent;
  let fixture: ComponentFixture<SupplierOutstandComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierOutstandComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierOutstandComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
