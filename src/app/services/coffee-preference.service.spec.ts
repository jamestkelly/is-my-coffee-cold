import { TestBed } from '@angular/core/testing';

import { CoffeePreferenceService } from './coffee-preference.service';

describe('CoffeePreferenceService', () => {
  let service: CoffeePreferenceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CoffeePreferenceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
