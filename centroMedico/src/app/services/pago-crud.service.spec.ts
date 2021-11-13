import { TestBed } from '@angular/core/testing';

import { PagoCrudService } from './pago-crud.service';

describe('PagoCrudService', () => {
  let service: PagoCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PagoCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
