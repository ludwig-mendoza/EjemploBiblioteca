export interface LoanI {
    id?: string;
    idBook: string;
    idUser: string;
    nameOfBook:string;
    state:string;
    startDate: Date;
    endDate: Date;
    coverOfBook?:any;
    fileref?:string;
  }
  