import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DatamodelComponent } from './datamodel.component';

describe('DatamodelComponent', () => {
  let component: DatamodelComponent;
  let fixture: ComponentFixture<DatamodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DatamodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DatamodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
