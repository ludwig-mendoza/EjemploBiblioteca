import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { StudentI } from '../../../../shared/models/student.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class StudentService {
  private postsCollection: AngularFirestoreCollection<StudentI>;
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.postsCollection = afs.collection<StudentI>('users');
  }

  public getAllPosts(): Observable<StudentI[]> {
    return this.postsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as StudentI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public getOnePost(id: StudentI): Observable<StudentI> {
    return this.afs.doc<StudentI>(`users/${id}`).valueChanges();
  }

  public deletePostById(student: StudentI) {
    return this.postsCollection.doc(student.id).delete();
  }

  public editPostById(student: StudentI) {
    return this.postsCollection.doc(student.id).update(student);
  }

  public preAddAndUpdatePost(post: StudentI): void {
    this.upload(post);
  }

  private savestudent(student: StudentI) {
    const postObj = {
      id_student: student.id_student,
      name: student.name,
      lastname_p: student.lastname_p,
      lastname_m: student.lastname_m, 
      grade: student.grade,
      group: student.group
    };

    if (student.id) {
      return this.postsCollection.doc(student.id).update(postObj);
    } else {
      return this.postsCollection.add(postObj);
    }

  }

  private upload (StudentI){
      this.savestudent(StudentI);
  }
}
