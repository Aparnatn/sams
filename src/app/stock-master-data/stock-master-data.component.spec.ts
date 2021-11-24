import { ComponentFixture, TestBed } from '@angular/core/testing';

import { StockMasterDataComponent } from './stock-master-data.component';

describe('StockMasterDataComponent', () => {
  let component: StockMasterDataComponent;
  let fixture: ComponentFixture<StockMasterDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ StockMasterDataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(StockMasterDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
