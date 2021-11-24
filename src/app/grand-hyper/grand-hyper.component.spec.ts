import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GrandHyperComponent } from './grand-hyper.component';

describe('GrandHyperComponent', () => {
  let component: GrandHyperComponent;
  let fixture: ComponentFixture<GrandHyperComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GrandHyperComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GrandHyperComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
