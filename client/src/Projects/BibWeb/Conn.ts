const baseUrl = "/api/node/bibweb/";

function makeRequest(requestMethod: string, url: string, data?: any) {
  return new Promise((resolve, reject) => {
    let options: RequestInit = {
      method: requestMethod,
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
    };

    if (data) {
      options = { ...options, body: JSON.stringify(data) };
    }

    fetch(baseUrl + url, options)
      .then((response) => response.json())
      .then((data) => {
        resolve(data);
      })
      .catch(() => {
        alert("Error on request");
      });
  });
}

class Conn {
  static async get(url: string) {
    return await makeRequest("get", url);
  }

  static async post(url: string, data: any) {
    return await makeRequest("post", url, data);
  }

  static async put(url: string, data: any) {
    return await makeRequest("put", url, data);
  }

  static async delete(url: string) {
    return await makeRequest("delete", url);
  }
}

export default Conn;
