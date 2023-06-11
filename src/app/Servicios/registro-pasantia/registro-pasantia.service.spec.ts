import { TestBed } from '@angular/core/testing';

import { RegistroPasantiaService } from './registro-pasantia.service';

describe('RegistroPasantiaService', () => {
  let service: RegistroPasantiaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(RegistroPasantiaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
