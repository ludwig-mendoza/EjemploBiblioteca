import { Component, OnInit, Inject } from '@angular/core';
import { MatDialogRef, MAT_DIALOG_DATA } from '@angular/material';

@Component({
  selector: 'app-modal-alumnos',
  templateUrl: './modal-alumnos.component.html',
  styleUrls: ['./modal-alumnos.component.scss']
})
export class ModalAlumnosComponent implements OnInit {

  constructor(public dialog: MatDialogRef<ModalAlumnosComponent>,
    @Inject(MAT_DIALOG_DATA) public data: string) { }

  ngOnInit() {
  }

}
