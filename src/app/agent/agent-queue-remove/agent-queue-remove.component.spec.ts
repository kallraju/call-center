import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentQueueRemoveComponent } from './agent-queue-remove.component';

describe('AgentQueueRemoveComponent', () => {
  let component: AgentQueueRemoveComponent;
  let fixture: ComponentFixture<AgentQueueRemoveComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentQueueRemoveComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentQueueRemoveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
