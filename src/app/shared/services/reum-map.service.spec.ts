import { TestBed } from '@angular/core/testing';

import { ReumMapService } from './reum-map.service';

describe('ReumMapService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ReumMapService = TestBed.get(ReumMapService);
    expect(service).toBeTruthy();
  });
});
