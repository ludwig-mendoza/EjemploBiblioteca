import { Component, OnInit, ViewChild, AfterViewInit  } from '@angular/core';
import { MatPaginator } from '@angular/material/paginator';
import { MatSort } from '@angular/material/sort';
import { MatTableDataSource } from '@angular/material/table';
import {StudentService} from '../../../components/admin/students/student/student.service';
import {StudentI} from '../../models/student.interface';

import Swal from 'sweetalert2';

import { MatDialog } from '@angular/material/dialog';
import { ModalAlumnosComponent } from '../modal-alumnos/modal-alumnos.component';


@Component({
  selector: 'app-table-alumnos',
  templateUrl: './table-alumnos.component.html',
  styleUrls: ['./table-alumnos.component.scss']
})
export class TableAlumnosComponent implements OnInit, AfterViewInit{

  displayedColumns: string[] = ['CodigoEstudiante', 'Nombre','ApellidoPaterno','ApellidoMaterno','Grado','Grupo' ,'Acciones'];
  dataSource = new MatTableDataSource();

  @ViewChild(MatPaginator, { static: true }) paginator: MatPaginator;
  @ViewChild(MatSort, { static: true }) sort: MatSort;

  constructor(private postSvc: StudentService, public dialog: MatDialog) { }

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

  onEditPost(student: StudentI) {
    console.log('Edit student', student);
    this.openDialog(student);
  }

  onDeletePost(student: StudentI) {
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
          Swal.fire('Eliminado!', 'Tu libro ha sido borrado.', 'success');
        }).catch((error) => {
          Swal.fire('Error!', 'There was an error deleting this student', 'error');
        });
      }
    });

  }

  onNewPost() {
    this.openDialog();
  }

  openDialog(student?: StudentI): void {
    const config = {
      data: {
        message: student ? 'Editar alumno' : 'Nuevo alumno',
        content: student
      }
    };

    const dialogRef = this.dialog.open(ModalAlumnosComponent, config);
    dialogRef.afterClosed().subscribe(result => {
      console.log(`Dialog result ${result}`);
    });
  }

}
