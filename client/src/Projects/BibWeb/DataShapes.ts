export interface AuthorShape {
    id: number;
    firstName: string;
    lastName: string;
}

export interface BookShape {
    id: number;
    name: string;
    isbn: string;
    numberOf: number;
    authorId: number;
}

export interface LendingShape {
    id: number;
    bookId: number;
    studentId: number;
    dateLentOut: Date;
    dateRequiredIn: Date;
}

export interface StudentShape {
    id: number;
    firstName: string;
    lastName: string;
    phone: string;
    mail: string;
}