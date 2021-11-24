import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgerbuttonsComponent } from './ledgerbuttons.component';

describe('LedgerbuttonsComponent', () => {
  let component: LedgerbuttonsComponent;
  let fixture: ComponentFixture<LedgerbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgerbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgerbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
