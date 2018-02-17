import { TestBed, inject } from '@angular/core/testing';

import { TextAnalysisService } from './text-analysis.service';

describe('TextAnalysisService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [TextAnalysisService]
    });
  });

  it('should be created', inject([TextAnalysisService], (service: TextAnalysisService) => {
    expect(service).toBeTruthy();
  }));
});
