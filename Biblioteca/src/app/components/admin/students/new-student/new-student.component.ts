import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { StudentI } from '../../../../shared/models/student.interface';
import { StudentService } from '../../students/student/student.service';

@Component({
  selector: 'app-new-student',
  templateUrl: './new-student.component.html',
  styleUrls: ['./new-student.component.scss']
})
export class NewStudentComponent implements OnInit {

  constructor( private postSvc:StudentService ) { }

  public newPostForm = new FormGroup({
    id_student: new FormControl('', Validators.required),
    name: new FormControl('', Validators.required),
    lastname_p: new FormControl('', Validators.required),
    lastname_m: new FormControl('', Validators.required),
    grade: new FormControl('', Validators.required),
    group: new FormControl('', Validators.required)
  });

  ngOnInit() {
  }

  addNewPost(data: StudentI) {
    console.log('New post', data);
    this.postSvc.preAddAndUpdatePost(data);
  }

}
