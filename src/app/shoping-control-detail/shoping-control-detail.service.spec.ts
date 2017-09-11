import { TestBed, inject } from '@angular/core/testing';

import { ShopingControlDetailService } from './shoping-control-detail.service';

describe('ShopingControlDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ShopingControlDetailService]
    });
  });

  it('should be created', inject([ShopingControlDetailService], (service: ShopingControlDetailService) => {
    expect(service).toBeTruthy();
  }));
});
