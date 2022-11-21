const provider = {
  authorize() {
    localStorage.setItem(
      '@APP-AUTHORIZATION',
      'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJqdGkiOiJlZGM5NjRlMy0xYjg1LTRkMTQtODNlMC01MmFjZjk3MmU2NDgiLCJ1bmlxdWVfbmFtZSI6InVzdWFyaW8xMUB0ZXN0ZS5jb20iLCJzdWIiOiIxMCIsImVtYWlsIjoidXN1YXJpbzExQHRlc3RlLmNvbSIsIkFzcE5ldC5JZGVudGl0eS5TZWN1cml0eVN0YW1wIjoiUjZGWTREN0NIUFZBR0FNSklYSjIzTTU3Q1lKNjVBN1MiLCJleHAiOjE2NjkxMzYyNTR9.cVblgzu09eA6QqBhvoIWTH3HQ80r4CD7Dstn8HocMPs'
    )
  }
}
export { provider }
