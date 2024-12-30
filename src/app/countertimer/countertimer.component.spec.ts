import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CountertimerComponent } from './countertimer.component';

describe('CountertimerComponent', () => {
  let component: CountertimerComponent;
  let fixture: ComponentFixture<CountertimerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CountertimerComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CountertimerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
