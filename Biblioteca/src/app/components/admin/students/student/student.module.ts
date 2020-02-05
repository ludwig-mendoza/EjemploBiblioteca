import { ReactiveFormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { StudentRoutingModule } from './student-routing.module';
import { StudentComponent } from './student.component';
import { MaterialModule } from '../../../../material.module';
import {TableAlumnosComponent} from '../../../../shared/components/table-alumnos/table-alumnos.component';

@NgModule({
  declarations: [StudentComponent, TableAlumnosComponent],
  imports: [
    CommonModule,
    StudentRoutingModule,
    MaterialModule,
    ReactiveFormsModule
  ]
})
export class StudentModule { }
