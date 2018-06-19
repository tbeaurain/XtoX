import { TestBed, inject } from '@angular/core/testing';

import { ConnectbackendService } from './connectbackend.service';

describe('ConnectbackendService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ConnectbackendService]
    });
  });

  it('should be created', inject([ConnectbackendService], (service: ConnectbackendService) => {
    expect(service).toBeTruthy();
  }));
});
