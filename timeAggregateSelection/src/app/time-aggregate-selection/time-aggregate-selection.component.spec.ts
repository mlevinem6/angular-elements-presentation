import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeAggregateSelectionComponent } from './time-aggregate-selection.component';

describe('TimeAggregateSelectionComponent', () => {
  let component: TimeAggregateSelectionComponent;
  let fixture: ComponentFixture<TimeAggregateSelectionComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeAggregateSelectionComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeAggregateSelectionComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
