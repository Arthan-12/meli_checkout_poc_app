export interface User {
  id: string;
  name: string;
  email: string;
}

export type UserActions = 'CREATE' | 'UPDATE' | 'GET' | 'DELETE' | null;
