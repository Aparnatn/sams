import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerStatementComponent } from './ledger-statement.component';

describe('LedgerStatementComponent', () => {
  let component: LedgerStatementComponent;
  let fixture: ComponentFixture<LedgerStatementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerStatementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerStatementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
