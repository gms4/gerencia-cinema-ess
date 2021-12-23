import { TestBed } from '@angular/core/testing';

import { SessoesSalaService } from './sessoesSala.service';

describe('SessoesSalaService', () => {
  let service: SessoesSalaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(SessoesSalaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
