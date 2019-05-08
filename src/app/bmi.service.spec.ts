import { TestBed } from '@angular/core/testing';

import { BmiService } from './bmi.service';

describe('BmiService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: BmiService = TestBed.get(BmiService);
    expect(service).toBeTruthy();
  });
});
