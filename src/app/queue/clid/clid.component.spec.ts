import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CLIDComponent } from './clid.component';

describe('CLIDComponent', () => {
  let component: CLIDComponent;
  let fixture: ComponentFixture<CLIDComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CLIDComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CLIDComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
