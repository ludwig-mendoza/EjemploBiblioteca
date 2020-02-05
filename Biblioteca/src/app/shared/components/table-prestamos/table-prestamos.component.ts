import { Component, OnInit, ViewChild, AfterViewInit } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
import { MatPaginator } from '@angular/material/paginator';
import {loansService} from '../../../components/admin/loans/loan/loans.service';
import {LoanI} from '../../models/loan.interface'

import Swal from 'sweetalert2';

import { MatDialog } from '@angular/material/dialog';
import { ModalPrestamosComponent } from '../modal-prestamos/modal-prestamos.component';

@Component({
  selector: 'app-table-prestamos',
  templateUrl: './table-prestamos.component.html',
  styleUrls: ['./table-prestamos.component.scss']
})
export class TablePrestamosComponent implements OnInit, AfterViewInit {

  displayedColumns: string[] = ['CodigoLibro', 'CodigoEstudiante', 'NombreLibro','FechaInicio', 'FechaFin', 'Solicitud','Acciones'];
  dataSource = new MatTableDataSource();
  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private postSvc: loansService, public dialog:MatDialog) { }

  ngOnInit() {
    this.postSvc
    .getAllPosts()
    .subscribe(student => (this.dataSource.data = student));
  }

  ngAfterViewInit() {
    this.dataSource.paginator = this.paginator;
    this.dataSource.sort = this.sort;
  }

  applyFilter(filterValue: string) {
    this.dataSource.filter = filterValue.trim().toLowerCase();
  }

  onEditPost(student: LoanI) {
    console.log('Edit loan', student);
    this.openDialog(student);
  }

  onDeletePost(student: LoanI) {
    Swal.fire({
      title: '¿Esta seguro?',
      text: `¡Esta accion no puede ser removida!`,
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, seguro!',
      cancelButtonText:  'Cancelar',
    }).then(result => {
      if (result.value) {
        this.postSvc.deletePostById(student).then(() => {
          Swal.fire('Eliminado!', 'Tu solicitud ha sido borrada.', 'success');
        }).catch((error) => {
          Swal.fire('Error!', 'There was an error deleting this student', 'error');
        });
      }
    });

  }

  openDialog(student?: LoanI): void {
    const config = {
      data: {
        message: student ? 'Aceptar solicitud' : 'Prueba' ,
        content: student
      }
    };

    const dialogRef = this.dialog.open(ModalPrestamosComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
