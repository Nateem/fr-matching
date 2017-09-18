import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CloudServiceDetailComponent } from './cloud-service-detail.component';

describe('CloudServiceDetailComponent', () => {
  let component: CloudServiceDetailComponent;
  let fixture: ComponentFixture<CloudServiceDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CloudServiceDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CloudServiceDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
