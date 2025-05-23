export interface User {
  id: number;
  username: string;
  email: string;
  password: string;
}

export interface UserAuthData {
  username: string;
  password: string;
}
