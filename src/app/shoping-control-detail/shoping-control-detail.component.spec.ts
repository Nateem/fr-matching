import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingControlDetailComponent } from './shoping-control-detail.component';

describe('ShopingControlDetailComponent', () => {
  let component: ShopingControlDetailComponent;
  let fixture: ComponentFixture<ShopingControlDetailComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingControlDetailComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingControlDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
