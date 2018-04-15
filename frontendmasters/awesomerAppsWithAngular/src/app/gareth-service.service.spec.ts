import { TestBed, inject } from '@angular/core/testing';

import { GarethServiceService } from './gareth-service.service';

describe('GarethServiceService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GarethServiceService]
    });
  });

  it('should be created', inject([GarethServiceService], (service: GarethServiceService) => {
    expect(service).toBeTruthy();
  }));
});
