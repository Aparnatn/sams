import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerMasterdataComponent } from './ledger-masterdata.component';

describe('LedgerMasterdataComponent', () => {
  let component: LedgerMasterdataComponent;
  let fixture: ComponentFixture<LedgerMasterdataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerMasterdataComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerMasterdataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
