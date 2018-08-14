import { TestBed, inject } from '@angular/core/testing';

import { AgentQueueService } from './agent-queue.service';

describe('AgentQueueService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [AgentQueueService]
    });
  });

  it('should be created', inject([AgentQueueService], (service: AgentQueueService) => {
    expect(service).toBeTruthy();
  }));
});
