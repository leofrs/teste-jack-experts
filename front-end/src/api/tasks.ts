export class TasksApi {
  private baseURL = "http://localhost:3001";

  async getAllTasks() {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${this.baseURL}/api/auth/home/get-all-tasks`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error("Network response was not ok");
    }

    const data = await response.json();
    return data;
  }

  async createTask(title, descricao) {
    const token = localStorage.getItem("token");
    const response = await fetch(`${this.baseURL}/api/auth/task/create-task`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title: title,
        descricao: descricao,
      }),
    });

    return response;
  }

  async getTaskById(id: number) {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${this.baseURL}/api/auth/task/get-task/${id}`,
      {
        method: "GET",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    const data = await response.json();
    return data;
  }

  async editTaskById(id, title, descricao) {
    const token = localStorage.getItem("token");
    const response = await fetch(`${this.baseURL}/api/auth/task/edit-task`, {
      method: "POST",
      headers: {
        Authorization: `Bearer ${token}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        id: id,
        title: title,
        descricao: descricao,
      }),
    });

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response;
  }

  async deleteTaskId(id: number) {
    const token = localStorage.getItem("token");
    const response = await fetch(
      `${this.baseURL}/api/auth/task/delete-task/${id}`,
      {
        method: "DELETE",
        headers: {
          Authorization: `Bearer ${token}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          id: id,
        }),
      }
    );

    if (!response.ok) {
      throw new Error(`Error: ${response.statusText}`);
    }

    return response;
  }
}
