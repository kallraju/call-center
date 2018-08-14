import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AgentQueueMappingComponent } from './agent-queue-mapping.component';

describe('AgentQueueMappingComponent', () => {
  let component: AgentQueueMappingComponent;
  let fixture: ComponentFixture<AgentQueueMappingComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AgentQueueMappingComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AgentQueueMappingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
