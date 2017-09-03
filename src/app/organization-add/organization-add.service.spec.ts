import { TestBed, inject } from '@angular/core/testing';

import { OrganizationAddService } from './organization-add.service';

describe('OrganizationAddService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [OrganizationAddService]
    });
  });

  it('should be created', inject([OrganizationAddService], (service: OrganizationAddService) => {
    expect(service).toBeTruthy();
  }));
});
