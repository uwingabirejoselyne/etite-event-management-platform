export function getAuthToken(): string | undefined {
  return localStorage.getItem('token')?.replaceAll('"', '')
}
export function getAuthUserId(): string | undefined {
  return localStorage.getItem('userId')?.replaceAll('"', '')
}
