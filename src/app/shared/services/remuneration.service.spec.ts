import { TestBed } from '@angular/core/testing';

import { RemunerationService } from './remuneration.service';

describe('RemunerationService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemunerationService = TestBed.get(RemunerationService);
    expect(service).toBeTruthy();
  });
});
