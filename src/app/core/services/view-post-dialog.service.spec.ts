import { TestBed } from '@angular/core/testing';

import { ViewPostDialogService } from './view-post-dialog.service';

describe('ViewPostDialogService', () => {
  let service: ViewPostDialogService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(ViewPostDialogService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
