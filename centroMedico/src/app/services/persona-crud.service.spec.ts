import { TestBed } from '@angular/core/testing';

import { PersonaCrudService } from './persona-crud.service';

describe('PersonaCrudService', () => {
  let service: PersonaCrudService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(PersonaCrudService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
