export enum OrderStatus {
  New = 'New',
  InProgress = 'InProgress',
  Completed = 'Completed',
  Canceled = 'Canceled',
}

export interface Order {
  uid: string;
  created: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  comment: string;
  fileURLs: string[];
  createDate: string;
  status: OrderStatus;
}


