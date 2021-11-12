import { TestBed } from '@angular/core/testing';

import { AgendaCrudService } from './agenda-crud.service';

describe('AgendaCrudService', () => {
  let service: AgendaCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(AgendaCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
