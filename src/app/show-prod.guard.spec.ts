import { TestBed } from '@angular/core/testing';

import { ShowProdGuard } from './show-prod.guard';

describe('ShowProdGuard', () => {
  let guard: ShowProdGuard;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    guard = TestBed.inject(ShowProdGuard);
  });

  it('should be created', () => {
    expect(guard).toBeTruthy();
  });
});
