import { TestBed, inject } from '@angular/core/testing';

import { GituserService } from './gituser.service';

describe('GituserService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GituserService]
    });
  });

  it('should be created', inject([GituserService], (service: GituserService) => {
    expect(service).toBeTruthy();
  }));
});
