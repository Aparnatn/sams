import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PostDatedChequesComponent } from './post-dated-cheques.component';

describe('PostDatedChequesComponent', () => {
  let component: PostDatedChequesComponent;
  let fixture: ComponentFixture<PostDatedChequesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PostDatedChequesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PostDatedChequesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
