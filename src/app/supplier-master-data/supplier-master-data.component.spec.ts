import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierMasterDataComponent } from './supplier-master-data.component';

describe('SupplierMasterDataComponent', () => {
  let component: SupplierMasterDataComponent;
  let fixture: ComponentFixture<SupplierMasterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierMasterDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
