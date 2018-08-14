import { AgentQueueModule } from './agent-queue.module';

describe('AgentQueueModule', () => {
  let agentQueueModule: AgentQueueModule;

  beforeEach(() => {
    agentQueueModule = new AgentQueueModule();
  });

  it('should create an instance', () => {
    expect(agentQueueModule).toBeTruthy();
  });
});
