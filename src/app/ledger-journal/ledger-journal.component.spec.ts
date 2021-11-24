import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerJournalComponent } from './ledger-journal.component';

describe('LedgerJournalComponent', () => {
  let component: LedgerJournalComponent;
  let fixture: ComponentFixture<LedgerJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
