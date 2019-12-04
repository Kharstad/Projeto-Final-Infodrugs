import { TestBed } from '@angular/core/testing';

import { RemedioService } from './remedio.service';

describe('RemedioService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: RemedioService = TestBed.get(RemedioService);
    expect(service).toBeTruthy();
  });
});
