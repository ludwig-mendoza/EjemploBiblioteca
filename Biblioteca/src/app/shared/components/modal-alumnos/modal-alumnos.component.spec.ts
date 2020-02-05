import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ModalAlumnosComponent } from './modal-alumnos.component';

describe('ModalAlumnosComponent', () => {
  let component: ModalAlumnosComponent;
  let fixture: ComponentFixture<ModalAlumnosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ModalAlumnosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ModalAlumnosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
