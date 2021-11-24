import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SupplierbuttonsComponent } from './supplierbuttons.component';

describe('SupplierbuttonsComponent', () => {
  let component: SupplierbuttonsComponent;
  let fixture: ComponentFixture<SupplierbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SupplierbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SupplierbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
