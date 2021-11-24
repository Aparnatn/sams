import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CustomerbuttonsComponent } from './customerbuttons.component';

describe('CustomerbuttonsComponent', () => {
  let component: CustomerbuttonsComponent;
  let fixture: ComponentFixture<CustomerbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CustomerbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CustomerbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
