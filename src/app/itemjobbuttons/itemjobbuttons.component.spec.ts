import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ItemjobbuttonsComponent } from './itemjobbuttons.component';

describe('ItemjobbuttonsComponent', () => {
  let component: ItemjobbuttonsComponent;
  let fixture: ComponentFixture<ItemjobbuttonsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ItemjobbuttonsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ItemjobbuttonsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
