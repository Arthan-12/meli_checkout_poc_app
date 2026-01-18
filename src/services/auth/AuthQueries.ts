export const authKeys = {
  all: ['logins'] as const,
  emails: () => [...authKeys.all, 'email'] as const,
  email: (id: string) => [...authKeys.emails(), id] as const,
};
