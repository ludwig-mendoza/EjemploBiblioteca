import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { StudentComponent } from './student.component';
import { StudentService } from './student.service';

describe('StudentComponent', () => {
  let component: StudentComponent;
  let fixture: ComponentFixture<StudentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ StudentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(StudentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    const service: StudentService = TestBed.get(StudentService);
    expect(component).toBeTruthy();
  });
});
