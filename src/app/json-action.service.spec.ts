import { TestBed, inject } from '@angular/core/testing';

import { JsonActionService } from './json-action.service';

describe('JsonActionService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [JsonActionService]
    });
  });

  it('should be created', inject([JsonActionService], (service: JsonActionService) => {
    expect(service).toBeTruthy();
  }));
});
