const provider = {
  authorize() {
    localStorage.setItem(
      '@APP-AUTHORIZATION',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJmMjJkOGNkZS1iOGUwLTQ3ZDMtOGU0OC1jYjdiNzJmMDRiYWUiLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW8xMUB0ZXN0ZS5jb20iLCJzdWIiOiIxMCIsImVtYWlsIjoidXN1YXJpbzExQHRlc3RlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiUjZGWTREN0NIUFZBR0FNSklYSjIzTTU3Q1lKNjVBN1MiLCJleHAiOjE2NjkyMTEzODB9.NESuJkDMtctPUxJZCTs96hbCGQNE5NdmghXcygQbgJA'
    )
  }
}
export { provider }

const tokenAuthorization = localStorage.getItem('@APP-AUTHORIZATION')
export const config = {
  headers: { Authorization: `Bearer ${tokenAuthorization}` }
}
