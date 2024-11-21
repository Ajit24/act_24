import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ExactfaqComponent } from './exactfaq.component';

describe('ExactfaqComponent', () => {
  let component: ExactfaqComponent;
  let fixture: ComponentFixture<ExactfaqComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ExactfaqComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ExactfaqComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
