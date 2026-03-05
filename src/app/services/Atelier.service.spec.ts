import { TestBed } from '@angular/core/testing';

import { AtelierService } from './Atelier.service';

describe('AtelierService', () => {
  let service: AtelierService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AtelierService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
