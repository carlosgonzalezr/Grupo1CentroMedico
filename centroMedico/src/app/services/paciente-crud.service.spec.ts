import { TestBed } from '@angular/core/testing';

import { PacienteCrudService } from './paciente-crud.service';

describe('PacienteCrudService', () => {
  let service: PacienteCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PacienteCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
