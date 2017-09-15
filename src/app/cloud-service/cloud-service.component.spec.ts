import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudServiceComponent } from './cloud-service.component';

describe('CloudServiceComponent', () => {
  let component: CloudServiceComponent;
  let fixture: ComponentFixture<CloudServiceComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudServiceComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudServiceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
