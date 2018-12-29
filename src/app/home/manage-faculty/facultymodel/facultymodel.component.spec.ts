import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultymodelComponent } from './facultymodel.component';

describe('FacultymodelComponent', () => {
  let component: FacultymodelComponent;
  let fixture: ComponentFixture<FacultymodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultymodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultymodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
