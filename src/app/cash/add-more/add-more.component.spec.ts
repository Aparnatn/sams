import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddMoreComponent } from './add-more.componenet';

describe('AddMoreComponent', () => {
  let component: AddMoreComponent;
  let fixture: ComponentFixture<AddMoreComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AddMoreComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AddMoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
