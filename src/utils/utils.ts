export const formatCurrency = (value: number) =>
  new Intl.NumberFormat('pt-BR', {
    style: 'currency',
    currency: 'BRL',
  }).format(value);

/**
 * Build request headers including Authorization Bearer token if available.
 * Reads token from localStorage key 'auToken'.
 */
export const getHeaders = (
  includeContentType = false,
): Record<string, string> => {
  const token = localStorage.getItem('authToken');
  const headers: Record<string, string> = {};
  if (token) headers.Authorization = `Bearer ${token}`;
  if (includeContentType) headers['Content-Type'] = 'application/json';
  return headers;
};
