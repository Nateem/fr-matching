import { TestBed, inject } from '@angular/core/testing';

import { CloudServiceDetailService } from './cloud-service-detail.service';

describe('CloudServiceDetailService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [CloudServiceDetailService]
    });
  });

  it('should be created', inject([CloudServiceDetailService], (service: CloudServiceDetailService) => {
    expect(service).toBeTruthy();
  }));
});
