import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ShopingControlComponent } from './shoping-control.component';

describe('ShopingControlComponent', () => {
  let component: ShopingControlComponent;
  let fixture: ComponentFixture<ShopingControlComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ShopingControlComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ShopingControlComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
