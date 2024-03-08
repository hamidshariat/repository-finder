import { TestBed } from '@angular/core/testing';

import { GithupServiceService } from './githup-service.service';

describe('GithupServiceService', () => {
  let service: GithupServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GithupServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
