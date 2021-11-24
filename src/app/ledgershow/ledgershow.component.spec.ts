import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgershowComponent } from './ledgershow.component';

describe('LedgershowComponent', () => {
  let component: LedgershowComponent;
  let fixture: ComponentFixture<LedgershowComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgershowComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgershowComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
