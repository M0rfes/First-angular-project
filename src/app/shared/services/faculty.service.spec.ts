import { TestBed } from '@angular/core/testing';

import { FacultyService } from './faculty.service';

describe('FacultyService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: FacultyService = TestBed.get(FacultyService);
    expect(service).toBeTruthy();
  });
});
