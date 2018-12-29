import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DepartmentmodelComponent } from './departmentmodel.component';

describe('DepartmentmodelComponent', () => {
  let component: DepartmentmodelComponent;
  let fixture: ComponentFixture<DepartmentmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DepartmentmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DepartmentmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
