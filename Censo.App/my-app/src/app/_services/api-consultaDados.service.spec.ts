/* tslint:disable:no-unused-variable */

import { TestBed, async, inject } from '@angular/core/testing';
import { ApiConsultaDadosService } from './api-consultaDados.service';

describe('Service: ApiConsultaDados', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ApiConsultaDadosService]
    });
  });

  it('should ...', inject([ApiConsultaDadosService], (service: ApiConsultaDadosService) => {
    expect(service).toBeTruthy();
  }));
});
