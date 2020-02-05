import { Injectable } from '@angular/core';
import { AngularFirestore, AngularFirestoreCollection } from '@angular/fire/firestore';
import { Observable } from 'rxjs';
import { map, finalize } from 'rxjs/operators';
import { LoanI } from '../../../../shared/models/loan.interface';
import { AngularFireStorage } from '@angular/fire/storage';

@Injectable({
  providedIn: 'root'
})
export class loansService {
  private postsCollection: AngularFirestoreCollection<LoanI>;
  private filePath: any;
  private downloadURL: Observable<string>;

  constructor(
    private afs: AngularFirestore,
    private storage: AngularFireStorage
  ) {
    this.postsCollection = afs.collection<LoanI>('reservation');
  }

  public getAllPosts(): Observable<LoanI[]> {
    return this.postsCollection
      .snapshotChanges()
      .pipe(
        map(actions =>
          actions.map(a => {
            const data = a.payload.doc.data() as LoanI;
            const id = a.payload.doc.id;
            return { id, ...data };
          })
        )
      );
  }

  public getOnePost(id: LoanI): Observable<LoanI> {
    return this.afs.doc<LoanI>(`reservation/${id}`).valueChanges();
  }

  public deletePostById(loans: LoanI) {
    return this.postsCollection.doc(loans.id).delete();
  }

  public preAddAndUpdatePost(post: LoanI): void {
    this.upload(post);
  }

  private saveloans(loans: LoanI) {
    const postObj = {
      idBook: loans.idBook ,
      idUser: loans.idUser,
      nameOfBook: loans.nameOfBook ,
      state: loans.state, 
      startDate: loans.startDate,
      endDate: loans.endDate,
      coverOfBook: loans.coverOfBook
    };

    if (loans.id) {
      return this.postsCollection.doc(loans.id).update(postObj);
    } else {
      return this.postsCollection.add(postObj);
    }

  }
  private upload (LoanI){
      this.saveloans(LoanI);
  }
}