import { TestBed } from '@angular/core/testing';

import { CentraljailServiceService } from './centraljail-service.service';

describe('CentraljailServiceService', () => {
  let service: CentraljailServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CentraljailServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
