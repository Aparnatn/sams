import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LedgereditComponent } from './ledgeredit.component';

describe('LedgereditComponent', () => {
  let component: LedgereditComponent;
  let fixture: ComponentFixture<LedgereditComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LedgereditComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LedgereditComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
