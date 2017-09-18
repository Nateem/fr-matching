import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CountdownDatetimeComponent } from './countdown-datetime.component';

describe('CountdownDatetimeComponent', () => {
  let component: CountdownDatetimeComponent;
  let fixture: ComponentFixture<CountdownDatetimeComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CountdownDatetimeComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CountdownDatetimeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
