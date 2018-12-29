import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RemunerationmodelComponent } from './remunerationmodel.component';

describe('RemunerationmodelComponent', () => {
  let component: RemunerationmodelComponent;
  let fixture: ComponentFixture<RemunerationmodelComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RemunerationmodelComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RemunerationmodelComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
