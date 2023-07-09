import { FileItem } from '@app/shared/models';

export enum OrderStatus {
  New = 'New',
  InProgress = 'InProgress',
  Completed = 'Completed',
  Canceled = 'Canceled',
}

export enum OrderStatusUkr {
  New = 'Нове замовлення',
  InProgress = 'В обробці',
  Completed = 'Завершене',
  Canceled = 'Відмінене',
}

export interface Order {
  id: string;
  created: string;
  fullName: string;
  company: string;
  email: string;
  phone: string;
  comment: string;
  files: FileItem[];
  createDate: string;
  status: OrderStatus;
}


