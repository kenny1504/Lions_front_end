import { TestBed } from '@angular/core/testing';

import { ProductAndServiceService } from './product-and-service.service';

describe('ProductAndServiceService', () => {
  let service: ProductAndServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ProductAndServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
