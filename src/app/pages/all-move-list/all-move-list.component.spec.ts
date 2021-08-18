import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AllMoveListComponent } from './all-move-list.component';

describe('AllMoveListComponent', () => {
  let component: AllMoveListComponent;
  let fixture: ComponentFixture<AllMoveListComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AllMoveListComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AllMoveListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
