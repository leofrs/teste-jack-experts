export class UserApi {
  async login(email: string, password: string) {
    const response = await fetch("http://localhost:3001/api/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        email: email,
        password: password,
      }),
    });
    return response;
  }

  async register(name: string, email: string, password: string) {
    const response = await fetch("http://localhost:3001/api/user/register", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name: name,
        email: email,
        password: password,
      }),
    });
    return response;
  }
}
