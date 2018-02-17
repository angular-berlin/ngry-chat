import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MessageBoxComponentComponent } from './message-box-component.component';

describe('MessageBoxComponentComponent', () => {
  let component: MessageBoxComponentComponent;
  let fixture: ComponentFixture<MessageBoxComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MessageBoxComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MessageBoxComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
