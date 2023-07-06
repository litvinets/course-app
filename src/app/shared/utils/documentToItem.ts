import { DocumentChangeAction } from '@angular/fire/compat/firestore';


export const documentToItem = (x: DocumentChangeAction<any>): any => {
  const data = x.payload.doc.data();
  return {
    id: x.payload.doc.id,
    ...data,
  };
};