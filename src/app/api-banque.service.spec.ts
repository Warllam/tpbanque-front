import { TestBed } from '@angular/core/testing';

import { ApiBanqueService } from './api-banque.service';

describe('ApiBanqueService', () => {
  let service: ApiBanqueService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ApiBanqueService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
