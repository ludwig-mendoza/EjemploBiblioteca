import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TableAlumnosComponent } from './table-alumnos.component';

describe('TableAlumnosComponent', () => {
  let component: TableAlumnosComponent;
  let fixture: ComponentFixture<TableAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TableAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TableAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
