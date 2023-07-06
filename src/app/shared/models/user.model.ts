import { Role } from "@app/shared/enums";

export interface User {
  uid: string;
  email: string;
  created: string;
}

export interface UserProfile extends User {
  uid: string;
  created: string;
  fullName: string;
  company: string;
  role: Role;
  email: string;
  phone: string;
}

export interface UserProfileRequest {
  fullName: string;
  company: string;
  role: Role;
  email: string;
  phone: string;
}

