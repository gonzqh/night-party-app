import { TestBed } from '@angular/core/testing';

import { Randomizer } from './randomizer';

describe('Randomizer', () => {
  let service: Randomizer;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(Randomizer);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
