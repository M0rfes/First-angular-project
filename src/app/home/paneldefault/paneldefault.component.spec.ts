import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PaneldefaultComponent } from './paneldefault.component';

describe('PaneldefaultComponent', () => {
  let component: PaneldefaultComponent;
  let fixture: ComponentFixture<PaneldefaultComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PaneldefaultComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PaneldefaultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
