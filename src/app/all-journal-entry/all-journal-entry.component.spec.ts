import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllJournalEntryComponent } from './all-journal-entry.component';

describe('AllJournalEntryComponent', () => {
  let component: AllJournalEntryComponent;
  let fixture: ComponentFixture<AllJournalEntryComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllJournalEntryComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllJournalEntryComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
