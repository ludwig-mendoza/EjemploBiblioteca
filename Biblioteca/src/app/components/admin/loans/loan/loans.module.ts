import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReactiveFormsModule } from '@angular/forms';


import { LoansRoutingModule } from './loans-routing.module';
import { LoansComponent } from './loans.component';
import { MaterialModule } from '../../../../material.module';
import{TablePrestamosComponent} from '../../../../shared/components/table-prestamos/table-prestamos.component'


@NgModule({
  declarations: [LoansComponent, TablePrestamosComponent],
  imports: [
    CommonModule,
    LoansRoutingModule,
    MaterialModule,
    ReactiveFormsModule
    
  ]
})
export class LoansModule { }
