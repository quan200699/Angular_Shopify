import {Role} from "./role";

export interface User {
  id?: number;
  email?: string;
  password?: string;
  facebook_id?: number;
  google_id?: number;
  fullName?: string;
  roles?: [Role];
}
