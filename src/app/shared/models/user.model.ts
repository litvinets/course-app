import { Role } from '@app/shared/enums';

export interface User {
  uid: string;
  fullName: string;
  company: string;
  phone: string;
  email: string;
  role: Role;
}
