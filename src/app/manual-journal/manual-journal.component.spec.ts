import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ManualJournalComponent } from './manual-journal.component';

describe('ManualJournalComponent', () => {
  let component: ManualJournalComponent;
  let fixture: ComponentFixture<ManualJournalComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ManualJournalComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ManualJournalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
