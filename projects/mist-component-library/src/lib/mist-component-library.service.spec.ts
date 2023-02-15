import { TestBed } from '@angular/core/testing';

import { MistComponentLibraryService } from './mist-component-library.service';

describe('MistComponentLibraryService', () => {
  let service: MistComponentLibraryService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MistComponentLibraryService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
