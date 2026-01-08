export interface User {
  id: number;
  name: string;
  email: string;
}

export type UserActions = 'CREATE' | 'UPDATE' | 'GET' | 'DELETE' | null;
