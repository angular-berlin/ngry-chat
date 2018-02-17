import { TestBed, inject } from '@angular/core/testing';

import { FunnyNamesService } from './funny-names.service';

describe('FunnyNamesService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FunnyNamesService]
    });
  });

  it('should be created', inject([FunnyNamesService], (service: FunnyNamesService) => {
    expect(service).toBeTruthy();
  }));
});
