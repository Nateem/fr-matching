import { TestBed, inject } from '@angular/core/testing';

import { ShopingControlService } from './shoping-control.service';

describe('ShopingControlService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopingControlService]
    });
  });

  it('should be created', inject([ShopingControlService], (service: ShopingControlService) => {
    expect(service).toBeTruthy();
  }));
});
