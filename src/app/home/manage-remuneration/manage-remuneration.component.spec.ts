import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ManageRemunerationComponent } from './manage-remuneration.component';

describe('ManageRemunerationComponent', () => {
  let component: ManageRemunerationComponent;
  let fixture: ComponentFixture<ManageRemunerationComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ManageRemunerationComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ManageRemunerationComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
