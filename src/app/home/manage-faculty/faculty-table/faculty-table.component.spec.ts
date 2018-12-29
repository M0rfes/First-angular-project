import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyTableComponent } from './faculty-table.component';

describe('FacultyTableComponent', () => {
  let component: FacultyTableComponent;
  let fixture: ComponentFixture<FacultyTableComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ FacultyTableComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(FacultyTableComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
