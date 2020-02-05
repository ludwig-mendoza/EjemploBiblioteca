import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TablePrestamosComponent } from './table-prestamos.component';

describe('TablePrestamosComponent', () => {
  let component: TablePrestamosComponent;
  let fixture: ComponentFixture<TablePrestamosComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TablePrestamosComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TablePrestamosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
