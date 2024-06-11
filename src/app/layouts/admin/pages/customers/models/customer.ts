import { Role } from "./role";

export interface Customer {
  id: string;
  name: string;
  lastName: string;
  dateCreated: string;
  email: string;
  password: string;
  enabled: boolean;
  roles: Role[];
}
